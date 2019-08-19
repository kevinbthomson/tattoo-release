import React, { useState, useEffect } from 'react';
import './App.scss';

import Statements from './components/Statements';
import Header from './components/Header';
import Clients from './components/Clients';
import Client from './components/Client';
import AddAppointment from './components/AddAppointment';
import Footer from './components/Footer';

const App = () => {
  const initialClients = () => JSON.parse(localStorage.getItem('clients')) || []; 
  const [clients, setClients] = useState(initialClients);
  
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const addClient = (client) => {
    setClients([ ...clients, client]);
  };

  return (
    <div className="App">
      <Header />

      <Clients clients={ clients } />
      
      <Client addClient={ addClient } />
      
      <Statements />
      
      <AddAppointment />
      
      <Footer />
    </div>
  );
};

export default App;
