import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          name='name' 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required
          placeholder='Contact Full Name'
        />
      </label>
      <br />

      <label>
        <input
          type='tel'
          name='phone'
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder='Contact Phone Number (###-###-####)'
        />
      </label>
      <br />

      <label>
        <input 
          type='email'
          name='email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Contact Email Address'
        />
      </label>
      <br />

      <input type='submit' value='Add Contact' />
    </form>
  );
};
