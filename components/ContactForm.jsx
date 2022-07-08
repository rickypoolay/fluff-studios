import React from "react";

export default function ContactForm() {
  return (
    <form id="contact-form">
      <div>
        <label htmlFor="name">Name</label>
        <input required type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="number">Phone Number</label>
        <input type="tel" name="number" id="number" />
      </div>
      <div>
        <label htmlFor="link">Website | Social Media Handle</label>
        <input type="url" name="link" id="link" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea required type="text" name="message" id="message" />
      </div>
      <button type="submit" className="btn-filled contact-submit">
        Send Message
      </button>
    </form>
  );
}
