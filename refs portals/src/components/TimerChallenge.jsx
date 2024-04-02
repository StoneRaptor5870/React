import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className='w-22rem flex flex-col items-center justify-center p-8 m-8 mr-4 ml-auto bg-gradient-to-br from-[#54a399] to-[#54a399] text-gray-800 shadow-md rounded-md'>
        <h2 className='text-2xl tracking-wider text-center uppercase text-gray-900'>{title}</h2>
        <p className='border border-teal-400 rounded p-1 my-2'>{targetTime} second{targetTime > 1 ? 's': ''}</p>
        <p>
        <button className='mt-2 py-2 px-4 border-none rounded bg-teal-800 text-white text-lg cursor-pointer transition-colors duration-300 hover:bg-teal-900' onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'}</button>
        </p>
        <p className={timerIsActive ? `timer-challenge flash-animation` : undefined}>{timerIsActive ? 'Time is running...' : 'Timer inactive'}</p>
      </section>
    </>
  );
}

TimerChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired
};