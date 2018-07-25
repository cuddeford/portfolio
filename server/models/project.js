const mongoose = require('mongoose')
const shortMongoId = require('short-mongo-id')

const slugify = text => text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

const ProjectSchema = new mongoose.Schema({
    shortId: { type: String, required: true, index: true, unique: true },
    name: { type: String, required: true, trim: true, unique: true },
    slug: { type: String, required: true, trim: true, unique: true },
    tags: { type: Array, required: true },
    description: { type: String, required: true, trim: true },
    public: { type: Boolean, default: false },
    position: { type: Number }
})

ProjectSchema.methods.createProject = async function () {
    this.slug = slugify(this.name)
    this.shortId = shortMongoId(this._id)
    
    const largestPosition = await Project.findOne({})
        .sort({ position: -1 })
        .select('position')
        .lean()
        .exec()
    
    this.position = largestPosition
        ? largestPosition.position + 1
        : 1
    
    return this.save()
}

ProjectSchema.statics.getAllProjects = function () {
    return this.find({})
        .lean()
        .exec()
}

ProjectSchema.statics.getAllPublicProjects = function () {
    return this.find({ public: true })
        .lean()
        .exec()
}

ProjectSchema.statics.deleteProject = function (shortId) {
    return this.findOneAndRemove({ shortId })
        .lean()
        .exec()
}

ProjectSchema.statics.updateProject = function (project) {
    return this.findOneAndUpdate(
        { shortId: project.shortId },
        {
            $set: {
                name: project.name,
                slug: slugify(project.name),
                tags: project.tags,
                description: project.description,
                tags: project.tags,
                public: project.public
            }
        },
        { new: true }
    )
        .lean()
        .exec()
}

ProjectSchema.statics.moveUp = async function (shortId) {
    const project = await this
        .findOne({ shortId })
        .lean()
        .exec()
    
    let oldPosition = project.position
    let newPosition = oldPosition <= 1
        ? 1
        : oldPosition - 1
    
    // Find the project above this one.
    // We are looking for a position one smaller than this one.
    // But we also want to account for gaps in case of project deletion.
    // So: find a project which has a smaller position but also the
    // largest of the smaller positions. This should return the closest to this one.
    const previousProject = await this
        .findOne({ position: { $lt: oldPosition } })
        .sort({ position: -1 })
        .exec()

    if (previousProject) {
        previousProject.position = oldPosition
        await previousProject.save()
    }
    
    return this.findOneAndUpdate(
        { shortId },
        { $set: { position: newPosition } },
        { new: true }
    )
        .lean()
        .exec()
}

ProjectSchema.statics.moveDown = async function (shortId) {
    const project = await this
        .findOne({ shortId })
        .lean()
        .exec()
    
    let oldPosition = project.position
    let newPosition
    
    const nextProject = await this
        .findOne({ position: { $gt: oldPosition } })
        .sort({ position: +1 })
        .exec()
    
    if (nextProject) {
        nextProject.position = oldPosition
        await nextProject.save()
        
        newPosition = oldPosition + 1
    } else {
        return project
    }
    
    return this.findOneAndUpdate(
        { shortId },
        { $set: { position: newPosition } },
        { new: true }
    )
        .lean()
        .exec()
}

ProjectSchema.statics.togglePublic = async function (shortId) {
    const project = await this
        .findOne({ shortId })
        .exec()
    
    project.public = !project.public
    
    return project.save()
}

var Project = module.exports = mongoose.model('Project', ProjectSchema)