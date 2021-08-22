import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import BooksState from './ContextApi/BooksState';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Students from './components/students';
import ReadingLog from './components/ReadingLog';
import Login from './components/Login';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BooksState>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route path='/students' component={Students} />
              <Route path='/books' component={Books} />
              <Route path='/readinglog' component={ReadingLog} />
              <Route path='/login' component={Login} />
              <Route path='/not-found' component={NotFound} />
              <Redirect from='/' exact to='/students' />
              <Redirect to='/not-found' />
            </Switch>
          </div>
        </Router>
      </BooksState>
    );
  }
}
export default App;
