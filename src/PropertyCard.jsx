import { FaBookmark } from 'react-icons/fa';
import { useState } from 'react';

function PropertyCard({ property, saveBookmark, removeBookmark }) {

  // toggle bookmark state
  const [toggledBookmark, setToggledBookmark] = useState(false);

  // toggling and saving a property

  const handleClick = () => {
    if (!toggledBookmark) {
      saveBookmark(property);
      setToggledBookmark(true);
    } else {
      removeBookmark(property);
      setToggledBookmark(false);
    }
  }

  // broken imgs handler

  const defaultSource = (e) => {
    e.target.src = 'placeholder.jpg';
  }

  return (
    <div className=" rounded overflow-hidden shadow-md bg-transparent duration-300 transform-gpu hover:shadow-lg">
      <div className="relative">
        <img
          className='object-cover aspect-square h-full w-full hover:scale-105 duration-1000 ease-out cursor-default'
          onError={defaultSource}
          src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
          alt={property.display_address} />

        <button className="absolute top-0 right-2" title="Click to bookmark this property">
          <FaBookmark className={`${!toggledBookmark ? 'text-yellow-400' : 'text-red-600'} transition-colors`}
            size="40"
            onClick={() => handleClick()} />
        </button>

        <p className="absolute z-20 bottom-1 right-1 px-2 py-1 text-white text-opacity-80 font-dm italic pointer-events-none">{property.price}</p>
        <div className="absolute z-10 bg-black bg-opacity-40 backdrop-blur-sm text-white rounded pb-10 w-full bottom-0 left-0 px-3 py-2 pointer-events-none">
          <p className=' pb-4'>{property.display_address}</p>
        </div>
      </div>


    </div>
  );
};

export default PropertyCard;
