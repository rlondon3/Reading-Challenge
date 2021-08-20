import React, { useState } from 'react';
import Input from '../common/Input';

const Login = () => {
  const [account, setAccount] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (account.username.trim() === '')
      errors.account = 'Username is required!';
    if (account.password.trim() === '')
      errors.password = 'Password is required!';
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors({ errors: errors || {} });
    if (errors) return;
    console.log('Submitted');
  };

  const validateProp = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required.';
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required.';
    }
  };

  const handleChange = ({ target: input }) => {
    const errorMessage = validateProp(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    setAccount({ ...account, [input.name]: input.value });
    setErrors(errors);
  };

  return (
    <div className='container left-align'>
      <div className='center-align'>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className='row'>
        <div className='valign-wrapper'>
          <i className='large material-icons'>local_library</i>
          <Input
            name='username'
            value={account.username}
            label='Username'
            onChange={handleChange}
            error={errors.username}
          />
        </div>
        <div className='valign-wrapper'>
          <Input
            name='password'
            value={account.password}
            label='Password'
            onChange={handleChange}
            error={errors.password}
          />
        </div>
      </form>
      <div className='right-align'>
        <button
          disabled={validate()}
          onClick={handleSubmit}
          className='waves-effect waves-light btn-large'
        >
          <i className='material-icons right'>send</i>Log Book
        </button>
      </div>
    </div>
  );
};

export default Login;
