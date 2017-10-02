import React, {Component} from 'react';
import Navbar from './components/presentationals/Navbar.jsx';
import {Footer} from './components/presentationals/Footer.jsx';
import BadgesContainer from './components/containers/BadgesContainer.jsx';
import UpdatesContainer from './components/containers/UpdatesContainer.jsx';
import initApp from './lib/init.js';

class App extends Component {
  componentDidMount() {
    initApp();
  }

  render(){
    return (
      <div>
        <h1>Community Client</h1>
        <Navbar />
        <BadgesContainer />
        <UpdatesContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
