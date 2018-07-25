const express = require('express')
const router = express.Router();

const passport = require('passport')

const Project = require('../models/project')
const User = require('../models/user')

router.route('/check-user')
    .post(async (req, res, next) => {
        return res.status(200).json({
            authenticated: !!req.session.user
        })
    })

router.route('/login')
    .post(async (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
            if (err) return next(err)
            if (!user) return res.status(500).json({ error: 'User not found.' })

            req.session.user = user.username
            req.session.save(err => {
                if (err) return next(err)

                res.cookie('lucio.session', req.sessionID, { ...req.session.cookie })
                res.status(200).json({ success: true, session: req.session.cookie, sessionID: req.sessionID })
            })
        })(req, res, next)
    })

router.route('/logout')
    .get(function (req, res, next) {
        req.logout()
        delete req.session.user
        
        req.session.save((err) => {
            if (err) return next(err)
            return res.status(200).json({ success: true })
        });
    })

router.route('/projects')
    .get(async (req, res, next) => {
        
        // If the user is an admin then return public and private projects
        if (req.session.user) {
            const projects = await Project.getAllProjects()
            return res.status(200).json(projects)
        }

        const projects = await Project.getAllPublicProjects()
        return res.status(200).json(projects)
    })
    .post(async (req, res, next) => {
        const { name, tags, description, links, public } = req.body
        const newProject = new Project({
            name, tags, description, links, public
        })

        const createdProject = await newProject.createProject()

        return res.status(200).json(createdProject)
    })
    
// All routes from here are protected
router.use(ensureAuthenticated)

router.route('/project')
    .post(async (req, res, next) => {
        const updatedProject = await Project.updateProject(req.body)
        return res.status(200).json(updatedProject)
    })
    .delete(async (req, res, next) => {
        const deletedProject = await Project.deleteProject(req.query.shortId)
        return res.status(200).json(deletedProject)
    })

router.route('/project/move-up')
    .put(async (req, res, next) => {
        const movedProject = await Project.moveUp(req.query.shortId)
        return res.status(200).json(movedProject)
    })

router.route('/project/move-down')
    .put(async (req, res, next) => {
        const movedProject = await Project.moveDown(req.query.shortId)
        return res.status(200).json(movedProject)
    })

router.route('/project/toggle-public')
    .put(async (req, res, next) => {
        const toggledProject = await Project.togglePublic(req.query.shortId)
        return res.status(200).json(toggledProject)
    })

router.route('/register')
    .post(async (req, res, next) => {
        User.register(new User({ username: req.body.username }), req.body.password, (err, account) => {
            if (err) return res.status(500).json({ error: err.message })

            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) return next(err)

                    res.status(200).json({ success: true })
                })
            })
        })
    })

function ensureAuthenticated(req, res, next) {
    return req.session.user
        ? next()
        : res.status(403).json({
            success: false,
            message: 'Permission denied'
        })
}

module.exports = router