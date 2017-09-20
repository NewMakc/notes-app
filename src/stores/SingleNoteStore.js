import alt from '../alt'
import SingleNoteActions from '../actions/SingleNoteActions'

class SingleNoteStore {
    constructor() {
        this.note = {};

        this.bindListeners({
            getSingleNote: SingleNoteActions.getSingleNote
        });
    }

    getSingleNote(note) {
        this.note = note;
    }
}

export default alt.createStore(SingleNoteStore, 'SingleNoteStore');