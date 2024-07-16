import { Component } from "react"
export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  render() {
  const {contacts, name} = this.state;
    return (
      <>
      <h1>Phonebook</h1>
      {/* create  */}
      <form>
        {/* name */}
      <label>Name</label>
      <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' /-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
      required
      value={name}
 
      />
      {/* telephone */}
      <label>Number</label>
      <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
      <button type="submit">Add contact</button>
      </form>

      <h1>Contacts</h1>
      </>
    )
  }
}
    