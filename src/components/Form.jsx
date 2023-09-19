import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import DefaultButton from './DefaultButton';

const ifContent = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const ifh3 = {
  backgroundColor: 'white',
  width: 300,
  padding: 30,
  color: 'black',
  borderRadius: 30
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const input = {
  width: 600,
  height: 40,
  marginBottom: 30,
  borderRadius: 20,
  fontSize: 20,
}

const textarea = {
  width: 600,
  height: 90,
  borderRadius: 20,
  fontSize: 20,
  marginBottom: 30,
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mleywdnj");

  if (state.succeeded) {
    return (
      <div style={ifContent}>
        <h3 style={ifh3}>Obrigado por enviar sua mensagem! Nossa equipe em breve te enviará um e-mail de resposta no e-mail informado no formulário!</h3>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={container}>
        <label htmlFor="email">
          <p>Insira seu melhor e-mail:</p>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          style={input}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <p>Insira a mensagem que deseja passar:</p>
        <textarea
          id="message"
          name="message"
          style={textarea}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <DefaultButton type='submit' text='Enviar' bgColor='green' />
      </div>
    </form>
  );
}