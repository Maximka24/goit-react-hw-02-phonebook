import React from "react";
import shortid from "shortid";
import listContacts from "../Data/Data.json";

import Section from "./Section/Section";
import PhoneBook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";

class App extends React.Component {
  state = {
    contacts: listContacts,
    filter: "",
  };

  dataSubmitForm = ({ name, number }) => {
    const arrayName = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    const checkName = arrayName.includes(name.toLowerCase());

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const elContact = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState((prevState) => ({
        contacts: [elContact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilterContacts = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalazFilter = filter.toLowerCase();
    const filterListContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazFilter)
    );

    return (
      <Section>
        <PhoneBook submitForm={this.dataSubmitForm} />

        <Contacts
          mainListContact={contacts}
          onChangeFilter={this.changeFilterContacts}
          filterContacts={filter}
          contactsList={filterListContacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;
