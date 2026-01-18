import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you'd like to get in touch, fill out the form below or email us at <a href="mailto:hello@example.com">hello@example.com</a>.</p>

      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks—message sent (demo)') }}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">Send message</button>
      </form>
    </div>
  )
}
