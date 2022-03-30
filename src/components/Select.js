import Option from './Option';
function Select({ label, setTextFeatures }) {
  const { id, type, options } = label;
  return (
    <>
      <label className="sideBarLabel" htmlFor={type}>
        {type}
      </label>
      {type && (
        <select
          className="sideBarSelect"
          name={type}
          id={type}
          onChange={(e) =>
            setTextFeatures((prev) =>
              prev.map((item) =>
                item.id === id ? { ...item, selected: e.target.value } : item
              )
            )
          }
        >
          {options.map((option, index) => (
            <Option option={option} key={index} type={type} />
          ))}
        </select>
      )}
    </>
  );
}
export default Select;
