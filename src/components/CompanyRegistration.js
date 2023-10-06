// src/components/CompanyRegistration.js
import React from 'react';
import { registerCompany } from '../services/ApiService';

const CompanyRegistration = () => {
  const handleRegisterCompany = () => {
    registerCompany('Train Central');
  };

  return (
    <div>
      <h1>Company Registration</h1>
      <button onClick={handleRegisterCompany}>Register Company</button>
    </div>
  );
};

export default CompanyRegistration;
