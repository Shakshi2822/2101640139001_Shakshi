// src/components/AuthComponent.js
import React, { useEffect, useState } from 'react';
import { getAuthToken } from '../services/ApiService';

const AuthComponent = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const handleAuthTokenRequest = async () => {
      const token = await getAuthToken();
      setAuthToken(token);
    };

    handleAuthTokenRequest();
  }, []);

  return (
    <div>
      <h1>Authentication Component</h1>
      <p>Authorization Token: {authToken}</p>
    </div>
  );
};

export default AuthComponent;

