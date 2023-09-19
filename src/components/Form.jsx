import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import DefaultButton from './DefaultButton';

function ContactForm() {
  const [state, handleSubmit] = useForm("mleywdnj");

  if (state.succeeded) {
    return <h3>Obrigado por enviar sua mensagem! Nossa equipe em breve te enviará um e-mail de resposta no e-mail informado no formulário!</h3>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="email">
          <p>Insira seu melhor e-mail:</p>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          style={{ width: 600, height: 30, marginBottom: 30, borderRadius: 20, textAlign: 'center', fontSize: 20 }}
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
          style={{ width: 600, height: 90, borderRadius: 20, textAlign: 'center', fontSize: 20, marginBottom: 30, }}
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
function App() {
  return (
    <ContactForm />
  );
}
export default App;