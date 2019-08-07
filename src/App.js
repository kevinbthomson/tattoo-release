import React, { Component } from 'react';
import './App.scss';

import Statements from './components/Statements';
import Header from './components/Header';
import Client from './components/Client';
import AddAppointment from './components/AddAppointment';
import Footer from './components/Footer';

class App extends Component {
  state = {
    clients: {}
  };

  addClient = (client) => {
    // 1. take a copy of state
    const clients = {...this.state.clients};
    // 2 add client to copy
    clients[`client${Date.now()}`] = client;
    // 3. update state
    this.setState({
      clients
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        
        <Client addClient={this.addClient} />
        
        <Statements />
        
        <AddAppointment />
        
        <Footer />
      </div>
    );
  }
}

export default App;
