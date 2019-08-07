import React from 'react';

class Statements extends React.Component {
  render() {
    return (
      <section className="container">
        <h2>Please check all statements that apply to you.</h2>

        <ul className="statements-list">
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I am at least eighteen (18) years of
              age.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I am not under the influence of
              drugs or alcohol.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I am currently under the care of a
              physician
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I am currently pregnant.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have a history of dizziness,
              fainting, epilepsy, seizure, or narcolepsy.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have/had a heart condition.
            </label>
          </li>
          <li className="statements-list__item">
            <label> <input type="checkbox" name="" /> I am diabetic. </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have contracted (any) communicable
              disease(s).
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have skin diseases/lesions.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have had Hepatitis A within the
              past twelve (12) months.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have been diagnosed with Hepatitis
              B or C.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have a history of Hemophilia.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I am taking anticoagulants or other
              medications that thin the blood and/or interfere with blood
              clotting.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> I have allergies or adverse
              reactions to pigments, dyes, disinfectants, latex, or soaps.
            </label>
          </li>
          <li className="statements-list__item">
            <label>
              <input type="checkbox" name="" /> Please list any other information
              that would aid in the evaluation of the tattoo application and
              healing process:
            </label>
          </li>
        </ul>
      </section>
    );
  }
}

export default Statements;