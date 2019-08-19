import React from 'react';
import { Button } from '../Elements';

const AddAppointment = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <form onSubmit={ handleSubmit } className="add-appointment container">
      <h2>Add Appointment</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="appDate">Date:</label>
          <input type="date" name="appDate" />
        </div>
        <div className="form-group">
          <label htmlFor="tubeNum">Tube #:</label>
          <input type="text" name="tubeNum" placeholder="Tube #" />
        </div>
        <div className="form-group">
          <label htmlFor="needleNum">Needle #:</label>
          <input type="text" name="needleNum" placeholder="Needle #" />
        </div>
        <div className="form-group">
          <label htmlFor="pigment">Pigment:</label>
          <input type="text" name="pigment" placeholder="Pigment" />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description of Work:</label>
          <textarea type="text" name="desc" rows="10" cols="10"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="signature">Signature:</label>
          <input type="text" name="signature" placeholder="Signature" />
        </div>
      </fieldset>
      <Button type="submit">+ Add Appointment</Button>
    </form>
  );
};

export default AddAppointment;