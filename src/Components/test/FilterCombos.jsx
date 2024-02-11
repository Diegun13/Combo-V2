export default function FilterCombos({ value, onChange }) {
  let filterMove = value
  let handleFilterChange = onChange
    return (
    <>
      <select
        className="text-black"
        value={filterMove}
        onChange={handleFilterChange}
      >
        <option value={"all"}>All</option>
        <option value={"jab"}>Jab</option>
        <option value={"n-air"}>n-air</option>
        <option value={"f-air"}>f-air</option>
      </select>
    </>
  );
}
