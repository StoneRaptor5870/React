import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="h-full bg-[#5f4e33] rounded-[6px] flex flex-col shadow-[0_0_1opx_rgba(0,0,0,0.2)]">
      <img className='w-full rounded-[6px]' src={image} alt={title} />
      <div className="flex-1 pt-0 pr-4 pb-2 pl-4 flex flex-col justify-between">
        <div>
          <h3 className='text-xl mb-1 text-[#fbd392]'>{title}</h3>
          <p className="text-xl text-[#d1b68b] m-0">${price}</p>
          <p>{description}</p>
        </div>
        <p className="text-right">
          <button className='bg-[#f4b115] hover:bg-[#f5b744] border-0 rounded-[5px] pr-2 pl-4 text-base cursor-pointer m-1' onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}


Product.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};