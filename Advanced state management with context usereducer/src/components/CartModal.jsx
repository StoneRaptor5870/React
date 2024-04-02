import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Cart from './Cart.jsx';

const CartModal = forwardRef(function Modal(
  { title, actions },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className='w-60 bg-[#d3b17b] border-0 rounded-[6px] shadow-[0_0_1opx_rgba(0,0,0,0.5)] fade-slide-in-from-top backdrop:bg-black backdrop:bg-opacity-65' ref={dialog}>
      <h2 className='text-2xl text-[#4f3807] uppercase m-0'>{title}</h2>
      <Cart />
      <form method="dialog" className='flex gap-4 justify-end items-center'>
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

CartModal.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default CartModal;