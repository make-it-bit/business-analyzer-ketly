'use client';
import { useState } from 'react';
import Link from 'next/link';

const Form1 = async ({ form_title, input1_title, input2_title, submit_button }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessLink, setBusinessLink] = useState('');

  return (
    <>
      <p className="form-heading">{form_title}</p>
      <form>
        <label id="business-name-label" htmlFor="business-name-input">
          {input1_title}
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
          {input2_title}
        </label>
        <input
          type="text"
          id="business-link-input"
          name="link"
          value={businessLink}
          onChange={(event) => setBusinessLink(event.target.value)}
          required
        ></input>
        <Link href={`/results?businessName=${businessName}`} className="analyze-button">
          {submit_button}
        </Link>
      </form>
    </>
  );
};

export default Form1;
