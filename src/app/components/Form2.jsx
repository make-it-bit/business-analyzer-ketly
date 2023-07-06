'use client';
import Link from 'next/link';

const Form2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const businessFile = event.target.file.files[0];
  };

  return (
    <>
      <p className="form-heading">
        Choose this option below, if you&apos;d like to get additional information about <span className="span1">many businesses</span>. We will
        perform a Google Lighthouse analysis on chosen businesses too!
      </p>
      <form onSubmit={handleSubmit}>
        <label id="business-file-label" htmlFor="business-file-input">
          Choose a .csv file that contains names and website links of the businesses you are interested in:
        </label>
        <input type="file" id="business-file-input" accept=".csv" name="file" required></input>
        <Link href={'/'} type="submit" className="analyze-button">
          ANALYZE
        </Link>
      </form>
    </>
  );
};

export default Form2;
