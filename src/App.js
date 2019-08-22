import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import uuid from 'uuid';
import './App.scss';

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

  const addClient = client => {
    client.id = uuid();
    setClients([ ...clients, client]);
  };

  const editClient = client => {
    const clientsEdited = clients.map(currentClient => client.id === currentClient.id ? client : currentClient);
    setClients(clientsEdited);
  };

  const deleteClient = client => {
    const clientsNew = clients.filter(currentClient => client.id !== currentClient.id );
    setClients(clientsNew);
  };

  return (
    <BrowserRouter>
      <Header />
      <main>
      
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/clients" />} />

        <Route exact path="/clients">
          <Clients clients={ clients } />
        </Route>
        
        <Route
          path="/clients/client/:id"
          render={(props) => <Client {...props} clients={ clients } addClient={ addClient } editClient={ editClient } deleteClient={ deleteClient } />}
        />
        
        <Route path="/appointments/add-appointment">
          <AddAppointment />
        </Route>
      </Switch>
        
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
