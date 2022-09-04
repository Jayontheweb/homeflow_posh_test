import { FaSearch } from 'react-icons/fa';


function SearchBox({ onSearch }) {


  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <div className=" flex flex-col justify-end pb-2 relative">
      <input
        placeholder="Search..."
        spellCheck={false}
        aria-label='Search Input'
        className="px-5 py-3 pr-10 bg-gray-500 border-2 border-gray-500 duration-200 focus:bg-zinc-800 focus:outline-none focus:border-gray-500 focus:transition-none text-white hover:border-gray-400 shadow-md placeholder:text-gray-200 rounded-md w-full"
        type='search'
        onChange={handleChange}
      />

      <FaSearch className="absolute bottom-6 right-3.5 text-gray-200" size={20} />
    </div>
  );
};

export default SearchBox;
