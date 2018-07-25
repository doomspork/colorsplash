import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

import Colors from './components/Colors';
import Gradients from './components/Gradients';

export default class App extends Component {
  state = {
    darkness: false,
    copied: false,
  }

  toggleDarkness = () => {
    this.setState({ darkness: !this.state.darkness });
    if (this.state.darkness) {
      document.body.classList.remove('darkness');
    } else {
      document.body.classList.add('darkness')
    }
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-head">
          <nav className="navbar is-transparent">
            <span className="icon moon" onClick={this.toggleDarkness} style={{cursor: "pointer"}}>
              <i className="fas fa-moon"></i>
            </span>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="tabs is-medium is-centered">
              <ul>
                <li><NavLink to="/" activeClassName="">Color</NavLink></li>
                <li><NavLink to="/gradient" activeClassName="">Gradient</NavLink></li>
              </ul>
            </div>
            <Switch>
              <Route exact path="/" component={Colors} />
              <Route exact path="/gradient" component={Gradients} />
            </Switch>
            <div className="content is-size-7">
              <p>Built with <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">ReactJS</a> and <a href="https://bulma.io" rel="noopener noreferrer" target="_blank">Bulma</a></p>
              <p><a href="https://github.com/utensils/colorsplash">view source <FontAwesomeIcon icon={faGithub}/></a></p>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
