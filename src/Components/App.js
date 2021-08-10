import React from "react";
import shortid from "shortid";

import Section from "./Section/Section";
import PhoneBook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";

class App extends React.Component {
  state = {
    contacts: [],
  };

  dataSubmitForm = ({ name, number }) => {
    const elContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [elContact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Section>
        <PhoneBook submitForm={this.dataSubmitForm} />

        <Contacts
          contactsList={contacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;
