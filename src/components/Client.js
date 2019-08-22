import React, { useState } from 'react';
import Statements from './Statements';
import { Button } from '../Elements';

const Client = ({ history, match, clients, addClient, editClient, deleteClient }) => {
  const currentClient = clients.find(client => client.id === match.params.id);
  const initialClientState = currentClient ? currentClient : {};
  
  const [client, setClient] = useState(initialClientState);

  const handleChange = e => {
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

  return (
    <>
    <form onSubmit={ clientSubmit } className="user-form container">
      <h2>{ client.first && client.last ? `${client.first} ${client.last}` : `Add Client:` }</h2>
      
      <fieldset>
        <legend>Client Info</legend>
        
        <div className="form-group">
          <label htmlFor="first">*Name:</label>
          <input type="text" name="first" placeholder="First Name" value={ client.first } onChange={ handleChange } required />
        </div>
        
        <div className="form-group">
          <label htmlFor="last">*Last Name:</label>
          <input type="text" name="last" placeholder="Last Name" value={ client.last } onChange={ handleChange } required />
        </div>
        
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input 
            type="date" 
            name="dob"
            placeholder="Date of Birth" 
            value={ client.dob }
            onChange={ handleChange } 
          />
        </div>

        <div className="form-group">
          <label htmlFor="stateId">State-issued ID:</label>
          <input type="text" name="stateId" placeholder="ID Number" value={ client.stateId } onChange={ handleChange } />
        </div>

        <div className="form-group">
          <label htmlFor="referred">Referred By:</label>
          <input type="text" name="referred" placeholder="Referred Name" value={ client.referred } onChange={ handleChange } />
        </div>
      </fieldset>

      <fieldset>
        <legend>Client Address</legend>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" name="city" placeholder="City" value={ client.city } onChange={ handleChange } />
        </div>
        
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select name="state" value={ client.state } onChange={ handleChange }>
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
          <input type="text" name="zip" placeholder="Zip Code" value={ client.zip } onChange={ handleChange } />
        </div>

        <div className="form-group">
          <label htmlFor="phone">*Phone:</label>
          <input type="tel" name="phone" placeholder="Phone Number" required value={ client.phone } onChange={ handleChange } />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="tel" name="email" placeholder="email@domain.com" value={ client.email } onChange={ handleChange } />
        </div>
      </fieldset>

      <div>
        <Button type="submit">
          { client.id ? `+ Save Client` : `+ Add Client` }
        </Button>
        
        { client.id ? <Button type="button" onClick={ removeClient }>+ Delete Client</Button> : null }
      </div>
    </form>

    <Statements />
    </>
  );
};

export default Client;