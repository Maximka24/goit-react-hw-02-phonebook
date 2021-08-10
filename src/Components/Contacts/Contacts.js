import React from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

const Contacts = ({ contactsList, onDeleteContact }) => {
  return (
    <div>
      <h2 className={s.Title}>Contacts</h2>
      {contactsList.length === 0 ? (
        <p>Sorry! No contacts...</p>
      ) : (
        <ul className={s.List}>
          {contactsList.map(({ id, name, number }) => (
            <li key={id} className={s.ElemList}>
              <p>
                {name}: {number}
              </p>
              <button className={s.Btn} onClick={() => onDeleteContact(id)}>
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
