const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./config/mongoose')()

const logger = require('morgan')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const User = require('./models/user')

const app = express()
const port = process.env.PORT || 8080

app.use(logger('dev'))

app.use(bodyParser.json())

app.use(session({
    secret: 'cupcakes',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({ mongooseConnection: mongoose.db }),
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
    },
    name: 'lucio.session'
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.all('*', (req, res, next) =>
    (res.setHeader('Access-Control-Allow-Credentials', 'true'), next()))

app.use('/api', require('./routes/api'))

const path = require('path')
app.use(express.static(path.join(__dirname, "build")))

app.get('/*', function (req, res) {
    res.status(200).sendFile(path.resolve(__dirname, "build", "index.html"))
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`))