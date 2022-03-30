import { Link } from 'react-router-dom';
import Design from '../components/Design';
function Order() {
  const items = JSON.parse(localStorage.getItem('designs'));
  return (
    <div className="designPage">
      <h1>Your Designs</h1>
      <ul className="designsContainer">
        {items !== null ? (
          items.map((item, i) => {
            if (i % 2 == 0)
              return (
                <Design index={i} name={item[0]} image={item[1]} key={i} />
              );
          })
        ) : (
          <h3>You have no saved Designs</h3>
        )}
      </ul>
      <div className="newDesign">
        <h2 className="newDesignHeading">Create New Design</h2>
        <ul className="itemsList">
          <Link to="/customize/t-shirt" className="itemCard">
            <li className="itemContent itemType"></li>
          </Link>
          <Link to="/customize/hoody" className="itemCard">
            <li className="itemContent itemType"></li>
          </Link>
          <Link to="/customize/cup" className="itemCard">
            <li className="itemContent itemType"></li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Order;
