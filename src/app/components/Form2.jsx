'use client';
import Link from 'next/link';
import { useState } from 'react';
import Papa from 'papaparse';

const Form2 = () => {
  const [businessFile, setBusinessFile] = useState('');

  const handleClick = () => {
    console.log('here');
    Papa.parse(businessFile, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setBusinessFile(results.data);
        console.log(results.data);
      },
    });
  };

  return (
    <>
      <p className="form-heading">
        Choose this option below, if you&apos;d like to get additional information about <span className="span1">many businesses</span>. We will
        perform a Google Lighthouse analysis on chosen businesses too!
      </p>
      <form>
        <label id="business-file-label" htmlFor="business-file-input">
          Choose a .csv file that contains names and website links of the businesses you are interested in:
        </label>
        <input
          type="file"
          id="business-file-input"
          accept=".csv"
          name="file"
          onChange={(event) => setBusinessFile(event.target.files[0])}
          required
        ></input>
        <Link href={'/results'} className="analyze-button" onClick={handleClick}>
          ANALYZE
        </Link>
      </form>
    </>
  );
};

export default Form2;
