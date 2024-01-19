import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2024-03-30T00:00:00');
  const currentDate = new Date();

  const calculateDaysRemaining = () => {
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  const [daysRemaining, setDaysRemaining] = useState(calculateDaysRemaining);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setDaysRemaining(calculateDaysRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
      <div className='title'>D-{daysRemaining}</div>
    </div>
  );
};

export default CountdownTimer;