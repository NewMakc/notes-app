import React, {Component} from 'react';

class NewNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            color: ''
        };

        this.titleChange = this.titleChange.bind(this)
        this.textChange = this.textChange.bind(this)
        this.colorChange = this.colorChange.bind(this)
    }

    titleChange(e) {
        const title = e.target.value
        this.setState({
            title: title
        })
    }

    textChange(e) {
        const text = e.target.value
        this.setState({
            text: text
        })
    }

    colorChange(e) {
        console.log(e.target.value)
        const color = e.target.value
        this.setState({
            color: color
        })
    }

    noteCreate(title, text) {
        let note = {}

        if(title.length === 0 ||
            text.length === 0) {
            return
        }

        note.title = title
        note.text = text
        note.color = this.state.color

        this.setState({
            title: '',
            text: '',
            color: `${this.state.color}`
        })

        return note
    }

    render() {

        const {title, text} = this.state

        return (
            <div className="new-note">
                <p>Новая заметка</p>
                <textarea
                    id="title"
                    type="text"
                    placeholder="Заголовок..."
                    onChange={this.titleChange}
                    value={this.state.title}
                />

                <textarea
                    id="text"
                    type="text"
                    placeholder="Текст..."
                    onChange={this.textChange}
                    value={this.state.text}
                />
                <div className="color-selector">
                    <input
                        id="blue"
                        className="blue"
                        type="radio"
                        name="color"
                        value="blue"
                        onClick={this.colorChange}/>
                    <label htmlFor="blue"/>

                    <input
                        id="red"
                        className="red"
                        type="radio"
                        name="color"
                        value="red"
                        onClick={this.colorChange}/>
                    <label htmlFor="red"/>

                    <input
                        id="green"
                        className="green"
                        type="radio"
                        name="color"
                        value="green"
                        onClick={this.colorChange}/>
                    <label htmlFor="green"/>

                    <input
                        id="yellow"
                        className="yellow"
                        type="radio"
                        name="color"
                        value="yellow"
                        onClick={this.colorChange}/>
                    <label htmlFor="yellow"/>
                </div>
                <button value="Готово" onClick={() => {
                    this.props.onSave(this.noteCreate(title, text))
                }
                }>Готово
                </button>
            </div>
        )
    }
}

export default NewNote