import React, { useState } from 'react';
import M from 'materialize-css';

const Input = ({ name, label, value, onChange, error }) => {
  setTimeout(() => {
    M.updateTextFields();
  });

  const [isHide, setHide] = useState(false);

  const toggleClass = () => {
    setHide(!isHide);
  };

  return (
    <React.Fragment>
      <div className='input-field col s6'>
        <label htmlFor={name}>{label}</label>
        <input
          onChange={onChange}
          id={name}
          value={value}
          name={name}
          type='text'
          className='validate'
        />
        {error && (
          <div
            className={isHide ? 'hide' : true}
            onClick={toggleClass}
            id='alert_box'
          >
            <div className='col s6 m12'>
              <div className='card red darken-1'>
                <div className='row'>
                  <div className='col s12 m10'>
                    <div className='card-content white-text'>{error}</div>
                  </div>
                  <div class='col s6 m2'>
                    <i
                      onClick={toggleClass}
                      className='fa fa-times icon_style'
                      id='alert_close'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Input;
