import React, { useRef } from 'react';
import { Hero } from '../Components/Hero';
import { Data } from '../Components/Data';

export const Dashboard = () => {
  const dataRef = useRef<HTMLDivElement>(null);
  const handleButtonClick = () => {
    if (dataRef.current) {
      dataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onButtonClick={handleButtonClick} />
      <div ref={dataRef}>
        <Data />
      </div>
    </>
  );
};
