'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Result1 from '../components/Result1';
import Result2 from '../components/Result2';

const ResultsPage = () => {
  const [businessName, setBusinessName] = useState('');
  console.log('businessName: ', businessName);
  const [isBusinessName, setIsBusinessName] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams != '') {
      setBusinessName(searchParams.get('businessName'));
      setIsBusinessName(true);
    }
  }, [searchParams]);

  return (
    <>
      <div className="data-container">
        {isBusinessName ? (
          <>
            <h1>{businessName}</h1>
            <h2>Äriregistri andmed</h2>
            <Result1 businessName={businessName} />
          </>
        ) : (
          <Result2 />
        )}
      </div>
    </>
  );
};

export default ResultsPage;
