import React, { useState } from 'react';
import contactFormStyles from '../styles/Contact.module.css';
import Footer from './Footer';
import axios from 'axios';
import ReactDOM from 'react-dom';

import { useForm } from 'react-hook-form';

const ContactForm = function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = async (datas) => {
    console.log(name);
    const appearMessage = React.createElement(
      'h4',
      {},
      'Your Message has been sent!'
    );
    if (Object.keys(errors).length === 0) {
      ReactDOM.render(
        appearMessage,
        document.querySelector('.feedBackMessage')
      );
    }

    let config = {
      method: 'POST',
      url: 'api/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: datas,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response === 200) {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const afterSubmit = (e) => {
    setName('');
    setEmail('');
    setMessage('');
    document.querySelectorAll('input').defaultValue = '';
    document.querySelector('#message').defaultValue = '';
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(registerUser)}
        className={contactFormStyles.form}
      >
        <label htmlFor="name">Name: &emsp;</label>
        <input
          {...register('name', {
            required: true,
            maxLength: 20,
          })}
          className={contactFormStyles.input}
          placeholder="Enter your name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        {errors && (
          <div style={{ color: 'red', marginTop: '5px' }}>
            {errors.name?.type === 'required' && 'Please enter your name'}
          </div>
        )}

        <br />
        <label htmlFor="email">Email: &emsp;</label>
        <input
          {...register('email', {
            required: true,
            maxLength: 20,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          className={contactFormStyles.input}
          placeholder="Enter your email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {errors && (
          <div style={{ color: 'red' }}>
            {errors.email?.type === 'required' && 'Please input your email'}
            {errors.email?.type === 'pattern' && 'Please enter a valid email'}
          </div>
        )}

        <br />
        <label htmlFor="message">Message: &emsp;</label>
        <textarea
          {...register('message', { required: true, maxLength: 300 })}
          className={contactFormStyles.input}
          id="message"
          rows="5"
          cols="20"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        {errors && (
          <div style={{ color: 'red' }}>
            {errors.message?.type === 'required' && (
              <p>Please input your message</p>
            )}
            {errors.message?.maxLength === '300' && (
              <p>Max Length of 300 characters</p>
            )}
          </div>
        )}
        <br />
        <div
          className="feedBackMessage"
          style={{ color: 'green', fontSize: '1.2em' }}
        ></div>
        <button
          onClick={afterSubmit}
          className={contactFormStyles.submitButton}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
