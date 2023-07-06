'use client';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const Result1 = ({ businessName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [businessData, setBusinessData] = useState([]);
  const infoBlocks = ['ÜLDINE INFO', 'KONTAKTINFO', 'MAKSUALANE INFO'];

  const transformBusinessData = (businessData) => {
    for (let i = 0; i < businessData.length; i++) {
      let result = [];
      for (const key in businessData[i]) {
        result.push([key, businessData[i][key]]);
      }
      businessData[i] = result;
    }
    return businessData;
  };

  useEffect(() => {
    const fetchData = async (businessName) => {
      try {
        const response = await fetch(`/api/crawler?businessName=${businessName}`).then((response) => response.json());
        setBusinessData(response);
        setIsLoading(false);
        return data;
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
        return;
      }
    };
    fetchData(businessName);
  }, [businessName]);

  return (
    <>
      {isLoading && <Loader />}
      {!isError ? (
        transformBusinessData(businessData).map((category, index) => (
          <div key={`table-${category}-${index}`}>
            <h3>{infoBlocks[index]}</h3>
            <table>
              <tbody>
                {category.map((info, index) => (
                  <>
                    <tr key={`info-${index}`}>
                      <th>{`${info[0]}:`}</th>
                      <td>{`${info[1]}`}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <div className="error-container">
          <p>ERROR: {errorMessage}!</p>
          <p>Sorry, we couldn&apos;t fetch the data! Go back to the home page and try again later!</p>
        </div>
      )}
    </>
  );
};

export default Result1;
