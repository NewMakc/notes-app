import alt from '../alt'
import {getRequest} from '../utils/request';

class SingleNoteActions {
    getSingleNote(id) {
        return dispatch => {
            getRequest(`/note/${id}`, (err, result) => {
                if (err) return;

                dispatch(result);
            });
        };
    }
}

export default alt.createActions(SingleNoteActions);