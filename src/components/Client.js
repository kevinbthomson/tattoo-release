import React, { useState } from 'react';
import Statements from './Statements';
import { Button } from '../Elements';
import Emoji from './Emoji';
import usStates from '../utils/usStates';

const Client = ({ history, match, clients, addClient, editClient, deleteClient }) => {
  const currentClient = clients.find(client => client.id === match.params.id);
  const initialClientState = currentClient ? currentClient : {};
  
  const [client, setClient] = useState(initialClientState);

  const handleInputChange = e => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setClient({ ...client, [inputName]: inputValue });
  }

  const clientSubmit = e => {
    e.preventDefault();
    
    if (client.id && client.first && client.last && client.phone) {
      editClient(client);
    } else if (client.first && client.last && client.phone) {
      addClient(client);
      history.goBack();
    }
  };

  const removeClient = (e) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this client?");

    if (confirmDelete) {
      deleteClient(client);
      history.goBack();
    }
  };

  const renderInput = (name, type, placeholder, required) => {
    if (client.id) {
      return (
        <input
          type={ type } 
          name={ name }
          id={ name }
          placeholder={ placeholder }
          value={ client[name] }
          onChange={ handleInputChange }
          required={ required }
          className="edit-client-input"
        />
      );
    } else {
      return (
        <input 
          type={ type } 
          name={ name }
          id={ name }
          placeholder={ placeholder }
          onChange={ handleInputChange }
          required={ required }
        />
      );
    }
  };

  const renderStateOptions = () => (
    usStates.map( state => <option key={ state.value } value={ state.value }>{ state.option }</option> )
  );

  const renderStateSelect = () => {
    if (client.id) {
      return (
        <select 
          name="state" 
          value={ client.state } 
          onChange={ handleInputChange } 
          className="edit-client-input"
        >
          { renderStateOptions() }
        </select>
      );
    } else {
      return (
        <select name="state" onChange={ handleInputChange }>
          { renderStateOptions() }
        </select>
      );
    }
  };

  return (
    <>
    <form onSubmit={ clientSubmit } className="user-form container">
      <h2>
        <Emoji emoji="😀" label="Smiling Face" /> { client.first && client.last ? `${client.first} ${client.last}` : `Add Client:` }
      </h2>
      
      <fieldset>
        <legend>Client Info</legend>
        
        <div className="form-group">
          <label htmlFor="first">*First Name:</label>
          {renderInput('first', 'text', 'First Name', true)}
        </div>
        
        <div className="form-group">
          <label htmlFor="last">*Last Name:</label>
          {renderInput('last', 'text', 'Last Name', true)}
        </div>
        
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          {renderInput('dob', 'date', 'Date of Birth')}
        </div>

        <div className="form-group">
          <label htmlFor="stateId">State-issued ID:</label>
          {renderInput('stateId', 'text', 'State ID Number')}
        </div>

        <div className="form-group">
          <label htmlFor="referred">Referred By:</label>
          {renderInput('referred', 'text', 'Referred by name')}
        </div>
      </fieldset>

      <fieldset>
        <legend>Client Address</legend>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          {renderInput('city', 'text', 'City')}
        </div>
        
        <div className="form-group">
          <label htmlFor="state">State:</label>
          { renderStateSelect() }
        </div>
        
        <div className="form-group">
          <label htmlFor="zip">Zip:</label>
          {renderInput('zip', 'text', 'Zip Code')}
        </div>

        <div className="form-group">
          <label htmlFor="phone">*Phone:</label>
          {renderInput('phone', 'tel', '000-000-0000', true)}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          {renderInput('email', 'email', 'email@domain.com')}
        </div>
      </fieldset>

      <div style={{ overflow: 'auto' }}>
        <Button type="submit">
          { client.id ?
            `Save Client`
            : `+ Add Client`
          }
        </Button>
        
        { client.id ? 
          <Button type="button" onClick={ removeClient } className="float-right">
            <Emoji emoji="🗑" label="Trashcan" /> Delete Client
          </Button>
          : null
        }
      </div>
    </form>

    <Statements />
    </>
  );
};

export default Client;