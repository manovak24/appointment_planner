import React from "react";

export const ContactPicker = (props) => {
  return (
    <select name={props.name} onChange={props.onChagne}>
      <option value='' key={-1} selected='selected'>No Contact Selected</option>
      
      {props.contacts.map((contact) =>  {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        )
      })}
    </select>
  );
};
