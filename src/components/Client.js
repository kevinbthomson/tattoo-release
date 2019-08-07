import React, { Component } from 'react';

class Client extends Component {

  firstRef = React.createRef();
  lastRef = React.createRef();
  dobRef = React.createRef();
  stateIdRef = React.createRef();
  referredRef = React.createRef();
  cityRef = React.createRef();
  stateRef = React.createRef();
  zipRef = React.createRef();
  phoneRef = React.createRef();

  clientSubmit = (event) => {
    event.preventDefault();

    const client = {
      first: this.firstRef.current.value,
      last: this.lastRef.current.value,
      dob: this.dobRef.current.value,
      stateId: this.stateIdRef.current.value,
      referred: this.referredRef.current.value,
      city: this.cityRef.current.value,
      state: this.stateRef.current.value,
      zip: this.zipRef.current.value,
      phone: this.phoneRef.current.value,
    }

    this.props.addClient(client);
    event.target.reset();

  };

  render() {
    return (
      <form onSubmit={this.clientSubmit} className="user-form container">
        <h2>Client:</h2>
        
        <fieldset>
          <legend>Client Info</legend>
          
          <div className="form-group">
            <label htmlFor="first">Name:</label>
            <input type="text" name="first" placeholder="First Name" ref={this.firstRef} />
          </div>
          
          <div className="form-group">
            <label htmlFor="last">Last Name:</label>
            <input type="text" name="last" placeholder="Last Name" ref={this.lastRef} />
          </div>
          
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input 
              type="date" 
              name="dob" 
             
              placeholder="Date of Birth" 
              ref={this.dobRef}
            />
          </div>

          <div className="form-group">
            <label htmlFor="stateId">State-issued ID:</label>
            <input type="text" name="stateId" placeholder="ID Number" ref={this.stateIdRef} />
          </div>

          <div className="form-group">
            <label htmlFor="referred">Referred By:</label>
            <input type="text" name="referred" placeholder="Referred Name" ref={this.referredRef} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Client Address</legend>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" placeholder="City" ref={this.cityRef} />
          </div>
          
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select name="state" ref={this.stateRef}>
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
            <input type="text" name="zip" placeholder="Zip Code" ref={this.zipRef} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" placeholder="Phone Number" ref={this.phoneRef} />
          </div>
        </fieldset>

        <button type="submit">+ Add User</button>
      </form>
    )
  }
}

export default Client;