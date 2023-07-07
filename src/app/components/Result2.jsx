'use client';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const Result2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [businessData, setBusinessData] = useState([]);
  const [businessNames, setBusinessNames] = useState([]);
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
    const data = JSON.parse(sessionStorage.getItem('businessData'));
    let namesArray = [];
    let dataArray = [];
    const fetchData = async (businessName, index) => {
      try {
        const response = await fetch(`/api/crawler?businessName=${businessName}`).then((response) => response.json());
        namesArray.push(businessName);
        dataArray.push([response]);
        if (index === 'last-index') {
          setBusinessNames(namesArray);
          setBusinessData(dataArray);
          setIsLoading(false);
        }
        return;
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
        return;
      }
    };
    for (let i = 0; i < data.length; i++) {
      if (i === data.length - 1) {
        fetchData(data[i].ärinimi, 'last-index');
      } else {
        fetchData(data[i].ärinimi, '');
      }
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isError ? (
        businessData.map((business, index) => (
          <>
            <div className="data-box">
              <h1>{businessNames[index]}</h1>
              <h2>Äriregistri andmed</h2>
              {transformBusinessData(business[0]).map((category, index) => (
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
              ))}
            </div>
          </>
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

export default Result2;
