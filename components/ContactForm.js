import React from 'react';
import contactFormStyles from '../styles/Contact.module.css';
import Footer from '../components/Footer';
import axios from 'axios';

import { useForm } from 'react-hook-form';

const ContactForm = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = async (datas) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = (e) => {
    console.log('Will add message');
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
          placeholder="please enter your email"
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
          rows="5"
          cols="20"
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
        <button
          onClick={clearForm}
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
