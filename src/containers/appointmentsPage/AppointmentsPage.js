import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [contact,  setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
   
    props.addApt(appointment);

    setTitle('');
    setContact('');
    setDate('');
    setTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        title={title}
        setTitle={setTitle}
        contact={contact}
        setConact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
        tiles={props.apts} />
      </section>
    </div>
  );
};
