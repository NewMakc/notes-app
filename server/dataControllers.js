let notesData = require('./notes.json')
let notes = notesData.notes

exports.sendAllNotes = () => {
    return notes
}

exports.sendNoteById = (noteID) => {
    let note = notes.find((note) => {
        return note.id === noteID
    })

    return note
}

let idGenerator = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

exports.noteValidator = (req, res, note) => {

    if (
        !('title' in note) ||
        !('text' in note) ||
        typeof note.title !== 'string' ||
        typeof note.text !== 'string' ||
        note.title.length === 0 ||
        note.text.length === 0
    ) {
        res.send(400)
        return console.log("poshel nahui")
    }

    else {
        note.id = idGenerator()
        notes.push(note)
        res.send(200)
    }
}

exports.removeByAttr = (attr, value, callback) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i][attr] === value) {
            notes.splice(i, 1);
            callback(true)
        }
    }
    return notes;
}