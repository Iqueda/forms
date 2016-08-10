import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      email: ''
    }
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onSubmitForm(event) {
    event.preventDefault();
    const data = {
      FIRST_NAME: this.state.nome,
      EMAIL_PERSONAL: this.state.email,
      created_at: Date.now()
    }
    console.log(data);
  }

  render() {
    const {nome, email} = this.state
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form id="form" onSubmit={this.onSubmitForm}>

          <label htmlFor="nome">Nome</label>
          <input
            ref={(node) => {this.fieldName = node}}
            onChange={() => this.setState({ nome: this.fieldName.value })}
            value={nome}
            type="text" name="nome" id="nome"
          />

          <label htmlFor="email">Email</label>
          <input
            ref={(node) => {this.fieldEmail = node}}
            onChange={() => this.setState({ email: this.fieldEmail.value })}
            value={email}
            type="text" name="email" id="email"
          />

          <button type="button">Cancelar</button>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
