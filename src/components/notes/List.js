import React, {Component} from 'react';
import ListCell from './ListCell';
import NewNote from './NewNote'

import NotesActions from '../../actions/NotesActions';
import NotesStore from '../../stores/NotesStore';

class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = NotesStore.getState();

        this.onChangeStore = this.onChangeStore.bind(this);
        this.onNotesSearch = this.onNotesSearch.bind(this);
        this.onCreateNote = this.onCreateNote.bind(this);
        this.onRemoveNote = this.onRemoveNote.bind(this);
    }

    componentWillMount() {
        NotesActions.getNotes();
    }

    componentDidMount() {
        NotesStore.listen(this.onChangeStore);
    }

    componentWillUnmount() {
        NotesStore.unlisten(this.onChangeStore);
    }

    onNotesSearch(e) {
        const searchQuery = e.target.value.toLowerCase();
        NotesActions.searchNotes(searchQuery)
    }

    onChangeStore(state) {
        this.setState(state);
    }

    onCreateNote(note) {
        if (!note) {
            return alert('note dont have value')
        }
        NotesActions.putNote(note)
    }

    onRemoveNote(id) {
        NotesActions.deleteNote(id)
    }

    render() {

        const {notes} = this.state

        return (
            <div className="notes-block">
                <div className="search-header">
                    <input
                        type="text"
                        placeholder="Поиск"
                        onChange={this.onNotesSearch}/>
                </div>
                <NewNote onSave={this.onCreateNote}/>
                <div className="notes-list">
                    {
                        notes.map((note) => {
                            return (
                                <ListCell
                                    key={note.id}
                                    id={note.id}
                                    color={note.color}
                                    title={note.title}
                                    text={note.text}
                                    onRemove={this.onRemoveNote}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default NotesList;