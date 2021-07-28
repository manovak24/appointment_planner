import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 
  const [contacts, setContacts] = useState([]);
  const [apts, setApts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  const addContact = () => {
    setContacts({...contacts, newContact: {
      name: '',
      phoneNumber: '',
      email: ''
    }})
  }

  const addApt = () => {
    setApts({...apts, newApt: {
      title: '',
      contact: '',
      date: '',
      time: ''
    }})
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage
            contacts={contacts}
            setContacts={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
            apts={apts}
            contacts={contacts}
            setApts={addApt} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
