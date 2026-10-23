
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search blog posts..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;
