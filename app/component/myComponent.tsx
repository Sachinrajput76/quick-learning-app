"use client"
// app/components/MyComponent.tsx

import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);

  if (randomNumber === null) {
    return <div>Loading...</div>;
  }

  return <div>Random Number: {randomNumber}</div>;
};

export default MyComponent;
