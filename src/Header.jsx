import SearchBox from './SearchBox';

function Header({ onSearch }) {
  return (
    <header className="flex flex-col md:flex-row justify-between pb-7 mb-20 border-b-2 border-white border-opacity-90">
      <h1 className="text-8xl font-heading text-white mb-10 md:mb-0">
        Posh Properties
      </h1>

      <SearchBox onSearch={onSearch} />
    </header>
  );
};

export default Header;
