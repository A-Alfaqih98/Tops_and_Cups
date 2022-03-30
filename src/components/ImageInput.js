function ImageInput({ image, setImage }) {
  const { type, size } = image;
  return (
    <>
      <label className="sideBarLabel" htmlFor={type}>
        {type}
      </label>
      <input
        className="sideBarImageInput"
        type="file"
        accept="image/png, image/jpeg"
        id={type}
        onChange={(e) => setImage({ ...image, image: e.target.files[0] })}
      />
      <label className="sideBarLabel" htmlFor={type}>
        {type} Size
      </label>
      <input
        className="sideBarInput"
        type="number"
        max="200"
        min="0"
        id={type}
        defaultValue="12"
        onChange={(e) => setImage({ ...image, size: e.target.value })}
      />
    </>
  );
}
export default ImageInput;
