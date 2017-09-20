import React, {Component} from 'react';

import SingleNoteActions from '../../actions/SingleNoteActions';
import SingleNoteStore from '../../stores/SingleNoteStore';

class SingleNote extends Component {
    constructor(props) {
        super(props);

        this.state = SingleNoteStore.getState();

        this.onChangeStore = this.onChangeStore.bind(this);
    }

    componentWillMount() {
        SingleNoteActions.getSingleNote(this.props.match.params.id);
    }

    componentDidMount() {
        SingleNoteStore.listen(this.onChangeStore);
    }

    componentWillUnmount() {
        SingleNoteStore.unlisten(this.onChangeStore);
    }

    onChangeStore(state) {
        this.setState(state);
    }


    render() {
        const {
            title,
            text
        } = this.state.note;

        return (
            <div className="single-note-page">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        );
    }
}

export default SingleNote