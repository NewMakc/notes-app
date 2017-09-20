import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import notesList from './components/notes/List';
import notesSingle from './components/notes/SingleItem';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Route exact path="/" component={notesList}/>
                    <Route path="/note/:id" component={notesSingle}/>
                </div>
            </Router>
        );
    }
}

export default App;
