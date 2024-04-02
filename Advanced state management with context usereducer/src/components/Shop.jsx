import PropTypes from 'prop-types';

export default function Shop({ children }) {
  return (
    <section className='w-70 mr-8 ml-auto'>
      <h2 className='text-2xl text-[#a59b8b] uppercase p-24'>Elegant Clothing For Everyone</h2>

      <ul className='list-none -mt-36 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 p-24'>{children}</ul>
    </section>
  );
}


Shop.propTypes = {
  children: PropTypes.array.isRequired,
};