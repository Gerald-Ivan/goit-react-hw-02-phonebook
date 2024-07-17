import { Component } from "react";
import { nanoid } from "nanoid";
export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    
      }
      handleChangeName = (e) => {
        this.setState({
          name: e.target.value,
        });
        
      }
      handleChangeNumber = (e) => {
        this.setState({
          number: e.target.value,
        });
        console.log(this.state.number)
      }
      handleSubmit = (e) => {
        e.preventDefault();
        const { number, name } = this.setState;
        const { addContact, contact } = this.props
        if (name.trim() === '' || number.trim() === '') {
          return;
        }
        
        const existingContact = contact.find( contact => contact.name.toLowerCase() === name.toLocaleLowerCase());

       if (existingContact){
        alert(`$(name) is already in contacts`)
        return;
       }
      }
   

  render() {
      const {number, name} = this.state;
    return (
      <>
      <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit}>
        {/* name */}
      <label>
        <p>Name</p>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={name}
        onChange={this.handleChangeName}
  
        />     
      </label>
   
      {/* telephone */}
      <label>
        <p>Number</p>
        <input
        type="tel"
        name="number"
        pattern = "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={this.handleChangeNumber}
        />
      </label>
      {/* submit */}
      <button type="submit">Add contact</button>
      </form>

      <h1>number</h1>
      </>
    )
  }
}
