function Option({ option }) {
  return (
    <>
      <option
        className="sideBarOption"
        value={option}
        style={{ color: `${option}` }}
      >
        {option}
      </option>
    </>
  );
}
export default Option;
