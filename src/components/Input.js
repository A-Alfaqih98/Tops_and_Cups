import { type } from '@testing-library/user-event/dist/type';

function Input({ fontSize, setFontSize }) {
  const { type, size } = fontSize;
  return (
    <>
      <label className="sideBarLabel" htmlFor={type}>
        {type} Size
      </label>
      <input
        className="sideBarInput"
        type="number"
        max="50"
        min="0"
        id={type}
        defaultValue="12"
        onChange={(e) => setFontSize({ ...fontSize, size: e.target.value })}
      />
    </>
  );
}
export default Input;
