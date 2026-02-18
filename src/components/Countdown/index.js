import { useEffect, useState } from "react";
import './style.css';

function Countdown() {
  const targetDate = new Date("2026-10-11T16:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      finished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.finished) {
    return <h2>O evento começou!</h2>;
  }

  return (
    <div className="countdown-container">
      <p>Contagem regressiva para o grande dia:</p>
      <div className="time-countdown">

        <div className="time-container">
          <span className="time-display">{timeLeft.days}</span>
          <strong>Dias</strong>
        </div>
        <div className="time-container">
          <span className="time-display">{timeLeft.hours}</span>
          <strong>Horas</strong>
        </div>
        <div className="time-container">
          <span className="time-display">{timeLeft.minutes}</span>
          <strong>Minutos</strong>
        </div>
        <div className="time-container">
          <span className="time-display">{timeLeft.seconds}</span>
          <strong>Segundos</strong>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
