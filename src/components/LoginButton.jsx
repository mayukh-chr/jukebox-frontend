import React from 'react';

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/login';
  };

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
};

export default LoginButton;
