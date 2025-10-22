export default function SearchBar({ searchParam, setSearchParam }) {
  return (
    <div className="searchBar">
      <label>
        Search:
        <input
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
        />
      </label>
    </div>
  );
}
