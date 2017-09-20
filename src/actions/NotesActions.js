import alt from '../alt'
import {getRequest, postRequest, deleteRequest} from '../utils/request';

class NotesActions {
    getNotes() {
        return dispatch => {
            getRequest('/notes', (err, result) => {
                if (err) return;

                dispatch(result.reverse());
            });
        };
    }

    putNote(note) {
        return dispatch => {
            postRequest('/notes', note, (callback) => {
                if (callback !== true) {
                    console.log('err')
                }

                else {

                    getRequest('/notes', (err, result) => {
                        if (err) return;

                        dispatch(result.reverse())
                    })
                }

            })
        }
    }

    deleteNote(id) {
        return dispatch => {
            deleteRequest('/note', id, (callback) => {
                if (callback !== true) {
                    console.log('err')
                }

                else {
                    getRequest('/notes', (err, result) => {
                        if (err) return;

                        dispatch(result.reverse())
                    })
                }
            })
        }
    }

    searchNotes(search) {
        return search;
    }
}

export default alt.createActions(NotesActions);