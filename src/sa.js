import React, { useState, useEffect } from 'react';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = () => {
    
    setLoggedIn(true);
    const username = 'exampleUser'; // Replace with actual username
    setUsername(username);
    // Store the username in localStorage
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    // Clearing the logged in status and username from state and localStorage
    setLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;