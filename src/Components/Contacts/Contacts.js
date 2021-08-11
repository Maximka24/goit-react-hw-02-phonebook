import React from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

const Contacts = ({
  mainListContact,
  contactsList,
  onDeleteContact,
  filterContacts,
  onChangeFilter,
}) => {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Contacts</h2>
      {mainListContact.length === 0 ? (
        <p>Sorry! No contacts...</p>
      ) : (
        <ul className={s.List}>
          <label className={s.Label}>
            Find contacts by name:
            <input
              type="text"
              name="name"
              value={filterContacts}
              onChange={onChangeFilter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
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
  mainListContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  filterContacts: PropTypes.string.isRequired,
};

export default Contacts;
