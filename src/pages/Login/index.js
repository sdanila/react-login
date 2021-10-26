import React from 'react';

const Login = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const onSubmit = () => {
    alert(JSON.stringify(
      {emailValue, passwordValue}, null, 2
    ));
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <p>Please enter your email and password</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name='password'
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder='Password'
        />
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
