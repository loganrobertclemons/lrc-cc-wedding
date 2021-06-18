import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const firstDateTime = new Date('2017-07-13T18:30:00');
    setAge(((Date.now() - firstDateTime) / divisor).toFixed(9));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Years since our first date',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Nashville, TN',
  },
];

export default data;
