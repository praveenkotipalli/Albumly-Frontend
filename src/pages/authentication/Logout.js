import React from 'react';
// import { useHistory } from 'react-router-dom';
// import React from 'react';
import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  const handleLogout = () => {
    // Redirect to "/login"
    window.location.href = '/login';
  };

  return (
    <div>
      <h1>You have logged out</h1>
      <button onClick={handleLogout}>Login</button>
    </div>
  );
};

export default Logout;
