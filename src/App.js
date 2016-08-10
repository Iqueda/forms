import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onSubmitForm(event) {
    event.preventDefault();
    const data = {
      FIRST_NAME: this.fieldName.value,
      EMAIL_PERSONAL: this.fieldEmail.value,
      created_at: Date.now()
    }
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form id="form" onSubmit={this.onSubmitForm}>

          <label htmlFor="nome">Nome</label>
          <input
            ref={(node) => {this.fieldName = node}}
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            ref={(node) => {this.fieldEmail = node}}
            type="text"
          />

          <button type="button">Cancelar</button>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
