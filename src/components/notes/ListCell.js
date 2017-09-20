import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NoteListCell extends Component {
    constructor(props) {
        super(props);

        this.removeNote = this.removeNote.bind(this);
    }

    removeNote(id) {
        return id
    }

    render() {
        const {
            id,
            title,
            text,
            color
        } = this.props;

        return (
            <div className="single-note">
                <Link className={`note ${color}`} to={`/note/${id}`}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button onClick={(e) => {
                            e.preventDefault()
                            this.props.onRemove(this.removeNote(id))
                        }
                    }>×</button>
                </Link>
            </div>
        );
    }
}

export default NoteListCell;