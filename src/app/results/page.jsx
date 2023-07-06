'use client';
import { useSearchParams } from 'next/navigation';
import Result1 from '../components/Result1';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const businessName = searchParams.get('businessName');

  return (
    <>
      <div className="data-container">
        <h1>{businessName}</h1>
        <h2>Äriregistri andmed</h2>
        <Result1 businessName={businessName} />
      </div>
    </>
  );
};

export default ResultsPage;
