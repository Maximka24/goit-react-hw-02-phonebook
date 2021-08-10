import React from "react";
import PropTypes from "prop-types";
import s from "./Phonebook.module.css";

class PhoneBook extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.submitForm(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={s.ContainerForm} onSubmit={this.onSubmitForm}>
        <h2 className={s.Title}>Phonebook</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.Btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

PhoneBook.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default PhoneBook;
