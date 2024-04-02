import { useRef, useContext } from 'react';

import CartModal from './CartModal.jsx';
import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button className='bg-transparent border-none rounded-[5px] text-[#201e1a] text-xl cursor-pointer hover:text-[#453719]'>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className='bg-transparent border-none rounded-[5px] text-[#201e1a] text-xl cursor-pointer hover:text-[#453719]'>Close</button>
        <button className='bg-transparent border-none rounded-[5px] text-[#201e1a] text-xl cursor-pointer hover:text-[#453719]'>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className='flex justify-between items-center pr-12 pl-15%'>
        <div className='flex items-center'>
          <img src="logo.png" alt="Elegant model" className='w-20 ml-24'/>
          <h1 className='text-center uppercase text-[#edbf68] drop-shadow-[0_0_4px_rgba(35,34,34,0.4)] text-4xl m-0 p-10'>Elegant Context</h1>
        </div>
        <p>
          <button className='bg-[#edbf68] hover:bg-[#f5b744] border-spacing-0 rounded-[5px] pr-2 pl-2 text-[#201e1a] text-2xl cursor-pointer mr-24 ml-4' onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
