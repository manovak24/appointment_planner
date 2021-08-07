import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import HomePage from './containers/HomePage/HomePage';
import { Nav, Navbar } from "react-bootstrap";

function App() {
 
  const [contacts, setContacts] = useState([]);
  const [apts, setApts] = useState([]);

  const ROUTES = {
    HOMEPAGE: '/home',
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email
      },
    ])
  }

  const addApt = (title, contact, date, time) => {
    setApts([
      ...apts,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      },
    ])
  }

  return (
    <div className='app-container'>
      <nav className='nav-container'>
        <Navbar>
          <Navbar.Brand href={ROUTES.HOMEPAGE}>Friendly Planner</Navbar.Brand>
          <Nav.Link href={ROUTES.CONTACTS} activeClassName="active">
            Contacts
          </Nav.Link>
          <Nav.Link href={ROUTES.APPOINTMENTS} activeClassName="active">
            Appointments
          </Nav.Link>
        </Navbar>  
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.HOMEPAGE} />
          </Route>
          <Route path={ROUTES.HOMEPAGE}>
            <HomePage />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage
            contacts={contacts}
            addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
            apts={apts}
            contacts={contacts}
            addApt={addApt} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
