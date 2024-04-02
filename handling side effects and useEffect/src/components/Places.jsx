import PropTypes from 'prop-types';

export default function Places({ title, places, fallbackText, onSelectPlace}) {
  return (
    <section className="max-w-[85rem] mr-0 ml-auto p-0 border-solid border-[2px] border-[#0d373e]">
      <h2 className='font-raleway text-xl mr-0 p-0 mb-4 text-center text-[#8feeff]'>{title}</h2>
      {places.length === 0 && <p className='text-center'>{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="max-w-[80rem] grid grid-cols-[repeat(auto-fill,minmax(288px,1fr))] gap-8 mr-8 ml-auto p-0 list-none">
          {places.map((place) => (
            <li key={place.id} className="relative flex flex-col rounded-lg bg-[#1f1c2c] box-shadow-md animate-slide-up-fade-in">
              <button className='bg-transparent border-none p-0 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300' onClick={() => onSelectPlace(place.id)}>
                <img className='w-[100%] h-[100%] object-cover rounded-lg' src={place.image.src} alt={place.image.alt} />
                <h3 className='font-raleway font-normal text-base absolute bottom-0 right-4 mr-4 ml-auto bg-[#feee86] rounded-[4px] pr-1 pl-2 box-shadow-n text-[#000]'>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

Places.propTypes = {
  title: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  fallbackText: PropTypes.string.isRequired,
  onSelectPlace: PropTypes.func.isRequired
};