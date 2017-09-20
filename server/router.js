let validator = require('./dataControllers')

exports.getAllNotes = (req, res, next) => {
    res.send(validator.sendAllNotes())
}

exports.getById = (req, res, next) => {
    res.send(validator.sendNoteById(req.params.id))
}

exports.addNote = (req, res, next) => {
    validator.noteValidator(req, res, req.body)
}

exports.deleteById = (req, res, next) => {
    validator.removeByAttr('id', req.params.id, (callback) => {
        if (callback === true) {
            res.send(200)
        }

        if (callback === false) {
            res.send(400)
        }
    })
}