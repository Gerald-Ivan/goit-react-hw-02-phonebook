import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm"

export class App extends Component {
  state = {
    contact: [],
    filter: ''
  }
  addContact = newContact => {
    this.setState(prevState => ({
      contact: [...prevState.contact, newContact]
    }));
    
  }

  render() {
    const {contact, filter} = this.setState;
    return (
      <>
      <ContactForm addContact={this.addContact} contact={contact}/>
      </>
    )
  }
}
    