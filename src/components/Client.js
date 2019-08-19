import React, { useRef } from 'react';
import { Button } from '../Elements';

const Client = ({ addClient }) => {

  const firstRef = useRef();
  const lastRef = useRef();
  const dobRef = useRef();
  const cityRef = useRef();
  const stateIdRef = useRef();
  const referredRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const phoneRef = useRef();

  const clientSubmit = (e) => {
    e.preventDefault();

    const client = {
      first: firstRef.current.value,
      last: lastRef.current.value,
      dob: dobRef.current.value,
      stateId: stateIdRef.current.value,
      referred: referredRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zip: zipRef.current.value,
      phone: phoneRef.current.value,
    }

    if (client.phone === '' || client.phone === undefined) {
      alert("Phone is required");
      return;
    }

    addClient(client);
    e.target.reset();
  };

  return (
    <form onSubmit={ clientSubmit } className="user-form container">
      <h2>Client:</h2>
      
      <fieldset>
        <legend>Client Info</legend>
        
        <div className="form-group">
          <label htmlFor="first">Name:</label>
          <input type="text" name="first" placeholder="First Name" ref={ firstRef } />
        </div>
        
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input type="text" name="last" placeholder="Last Name" ref={ lastRef } />
        </div>
        
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input 
            type="date" 
            name="dob"
            placeholder="Date of Birth" 
            ref={ dobRef }
          />
        </div>

        <div className="form-group">
          <label htmlFor="stateId">State-issued ID:</label>
          <input type="text" name="stateId" placeholder="ID Number" ref={ stateIdRef } />
        </div>

        <div className="form-group">
          <label htmlFor="referred">Referred By:</label>
          <input type="text" name="referred" placeholder="Referred Name" ref={ referredRef } />
        </div>
      </fieldset>

      <fieldset>
        <legend>Client Address</legend>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" name="city" placeholder="City" ref={ cityRef } />
        </div>
        
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select name="state" ref={ stateRef }>
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
          <input type="text" name="zip" placeholder="Zip Code" ref={ zipRef } />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" placeholder="Phone Number" ref={ phoneRef } />
        </div>
      </fieldset>

      <Button type="submit">+ Save Client</Button>
    </form>
  );
};

export default Client;