function Design({ index, name, image }) {
  return (
    <li className="designItem">
      <img className="designImage" src={image} alt="" />
      <div className="designInfo">
        <h5 className="infoTitle">Design Name</h5>
        <p className="designName">{name}</p>
        <h5 className="infoTitle">Design Number</h5>
        <p className="designIndex">
          {index === 0 ? index + 1 : index === 2 ? 2 : index - index / 2 + 1}
        </p>
      </div>
    </li>
  );
}
export default Design;
