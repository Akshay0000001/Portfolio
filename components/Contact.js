// components/Contact.js
"use client";
import { useState } from 'react';
import styles from '../app/page.module.css'; // If you want to style it separately

const Contact = () => {
  // States to track form inputs and submission status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setIsLoading(true);

    // Simulate a form submission to an API or backend
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsError(false);
        setName('');
        setEmail('');
        setMessage('');
        setIsLoading(false);
      } else {
        setIsError(true); 
        setIsSubmitted(false);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true); 
      setIsSubmitted(false);
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Contact</h2><br></br>
      <p className={styles.text}>If you’d like to collaborate or get in touch, feel free to reach out to me!</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel} htmlFor="name">Name:</label>
        <input
          className={styles.formInput}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className={styles.formLabel} htmlFor="email">Email:</label>
        <input
          className={styles.formInput}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={styles.formLabel} htmlFor="message">Message:</label>
        <textarea
          className={styles.formTextarea}
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button className={styles.formButton} type="submit">{isLoading ? "Sending" : "Send"}</button>
      </form>

      {/* Success or error message */}
      {isSubmitted && !isError && (
        <div className="successMessage">
          <p>Thank you for reaching out! We'll get back to you soon.</p>
        </div>
      )}

      {isError && (
        <div className="errorMessage">
          <p>There was an error submitting your form. Please try again later.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
