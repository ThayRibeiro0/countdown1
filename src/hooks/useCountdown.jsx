import { useState, useEffect } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const countDate = new Date(date).getTime();
      const now = new Date().getTime();
      const interval = countDate - now;

      if (interval <= 0) {
        // Countdown reached zero, stop the interval
        clearInterval(countdownInterval);
        return;
      }

      const oneSecond = 1000;
      const oneMinute = oneSecond * 60;
      const oneHour = oneMinute * 60;
      const oneDay = oneHour * 24;

      const dayNumber = Math.floor(interval / oneDay);
      const hourNumber = Math.floor((interval % oneDay) / oneHour);
      const minuteNumber = Math.floor((interval % oneHour) / oneMinute);
      const secondNumber = Math.floor((interval % oneMinute) / oneSecond);

      setDay(dayNumber);
      setHour(hourNumber);
      setMinute(minuteNumber);
      setSecond(secondNumber);
    }, 1000);

    // Clear interval when component unmounts or when countdown reaches zero
    return () => clearInterval(countdownInterval);
  }, [date]);

  return [day, hour, minute, second];
};

export default useCountdown;
