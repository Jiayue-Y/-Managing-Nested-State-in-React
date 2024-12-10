'use client'

import React, { useState } from 'react';

const UserProfile = () => {

  const [userProfile, setUserProfile] = useState({
    name: 'Mary Jane',
    email: 'mary@qq.com',
    address: {
      street: '123 Spring St',
      city: 'Seattle',
      country: 'USA',
    },
  });

  const updateAddress = (street, city, country) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        street,
        city,
        country,
      },
    }));
  };

  return (
    <div>
      <div>
        <label>Street: <input type="text" 
        defaultValue={userProfile.address.street} id="street"/></label>
      </div>
      <div>
        <label>City: <input type="text" 
        defaultValue={userProfile.address.city} id="city"/></label>
      </div>
      <div>
        <label>Country: <input type="text" 
        defaultValue={userProfile.address.country} id="country"/></label>
      </div>

      <button
        onClick={() => {
          const street = document.getElementById('street').value;
          const city = document.getElementById('city').value;
          const country = document.getElementById('country').value;
          updateAddress(street, city, country);
        }}
      >
        Update Address
      </button>

      <h2>Profile Information:</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>
        Address: {userProfile.address.street}, {userProfile.address.city},{' '}
        {userProfile.address.country}
      </p>
    </div>
  );
};

export default UserProfile;
