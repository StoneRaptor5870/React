import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset },
  ref){
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="border-none rounded-12 p-8 bg-d7fcf8" onClose={onReset}>
        {userLost && <h2 className='font-handjet mb-1 text-3xl uppercase'>You lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          The target time was <strong className='text-teal-800'>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with{' '}
          <strong className='text-teal-800'>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form className='text-right' method="dialog" onSubmit={onReset}>
          <button className='mt-4 py-2 px-4 border-none rounded bg-teal-800 text-white text-lg cursor-pointer transition-colors duration-300 hover:bg-teal-900'>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal')
    );
  });

  ResultModal.propTypes = {
    remainingTime: PropTypes.number.isRequired,
    targetTime: PropTypes.number.isRequired,
    onReset: PropTypes.func.isRequired
  };

  export default ResultModal;