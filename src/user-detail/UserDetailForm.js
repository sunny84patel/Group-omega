import React, { useState } from 'react';
import './UserDetailForm.css';

const UserDetailForm = ({ course, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <div className="user-detail-form">
      <h2>Enroll in {course.title}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="tel" 
          placeholder="Phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetailForm;
