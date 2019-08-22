import React, { useState } from 'react';
import Statements from './Statements';
import { Button } from '../Elements';
import Emoji from './Emoji';

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
          placeholder={ placeholder }
          value={ client[name] }
          onChange={ handleInputChange }
          required={ required }
        />
      );
    } else {
      return (
        <input 
          type={ type } 
          name={ name }
          placeholder={ placeholder }
          onChange={ handleInputChange }
          required={ required }
        />
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
          <label htmlFor="first">*Name:</label>
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
          <select name="state" value={ client.state } onChange={ handleInputChange }>
            <option value="">Select State:</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
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