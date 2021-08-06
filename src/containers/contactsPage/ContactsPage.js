import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(null);

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate) {
      props.addContact(name, phone, email)
      setName('');
      setPhone('');
      setEmail('');
    } else if (duplicate) {
      Swal.fire({
        title: 'This contact already exists',
        icon: 'error'
      })
    }

  };

  


  useEffect(() => {
    const duplicateCheck = () => {
      const exists = props.contacts.find(contact => contact.name === name);
      if (exists !== undefined) {
        return true
      } 

      return false;
    };

      if (duplicateCheck()) {
        setDuplicate(true);
      } else {
        setDuplicate(false);
      }
    
  }, [name, props.contacts, duplicate]);

  return (
    <div>
      <section style={{margin: '1rem'}}>
        <h2>Add Contact</h2>
        {duplicate ? '- Contact Already Exists' : ''}
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
          <div style={{ height: '20rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <TileList
            tiles={props.contacts} />
          </div>
      </section>
    </div>
  );
};
