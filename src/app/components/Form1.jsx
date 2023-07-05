'use client';
import { useState } from 'react';

const Form1 = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessLink, setBusinessLink] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const businessName = event.target.name.value;
    const businessLink = event.target.link.value;
    const response = await fetch(`/api/crawler?businessName=${businessName}`);
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <>
      <p className="form-heading">
        Choose this option below, if you&apos;d like to get additional information just about <span>one business</span>. We will perform a Google
        Lighthouse analysis on the chosen business too!
      </p>
      <form onSubmit={handleSubmit}>
        <label id="business-name-label" htmlFor="business-name-input">
          Enter the name of the business you&apos;re interested in:
        </label>
        <input
          type="text"
          id="business-name-input"
          name="name"
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
          required
        ></input>
        <label id="business-link-label" htmlFor="business-link-input">
          Enter the website link of the business you&apos;re interested in:
        </label>
        <input
          type="text"
          id="business-link-input"
          name="link"
          value={businessLink}
          onChange={(event) => setBusinessLink(event.target.value)}
          required
        ></input>
        <button type="submit" className="analyze-button">
          ANALYZE
        </button>
      </form>
    </>
  );
};

export default Form1;
