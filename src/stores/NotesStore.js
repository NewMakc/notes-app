import alt from '../alt'
import NotesActions from '../actions/NotesActions'

class NotesStore {
    constructor() {
        this.notes = [];
        this.cacheNotes = [];

        this.bindListeners({
            getNotes: NotesActions.getNotes,
            searchNotes: NotesActions.searchNotes,
            putNote: NotesActions.putNote,
            deleteNote: NotesActions.deleteNote
        });
    }

    getNotes(notes) {
        this.notes = notes
        this.cacheNotes = notes
    }

    putNote(notes) {
        this.notes = notes
        this.cacheNotes = notes
    }

    deleteNote(notes) {
        this.notes = notes
        this.cacheNotes = notes
    }

    searchNotes(search) {
        let searchValue = null;

        this.notes = this.cacheNotes.filter((note) => {
            searchValue = note.text.toLowerCase() + note.title.toLowerCase();

            return searchValue.indexOf(search) !== -1
        });
    }
}

export default alt.createStore(NotesStore, 'NotesStore');
