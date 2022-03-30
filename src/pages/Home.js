import { Link } from 'react-router-dom';
function Home() {
  return (
    <main className="home">
      <h2 className="mainText">
        Customize your Top or Cup with your favorate qoute or image and keep
        every thing relevant to your vibe.
      </h2>
      <div className="itemsListDiv">
        <h2 className="itemsListHeading">Choose Item to Customize</h2>
        <ul className="itemsList">
          <Link to="customize/t-shirt" className="itemCard">
            <li className="itemContent itemType"></li>
          </Link>
          <Link to="customize/hoody" className="itemCard">
            <li className="itemContent itemType"></li>
          </Link>
          <Link to="customize/cup" className="itemCard">
            <li className="itemContent itemType"></li>
          </Link>
        </ul>
      </div>
    </main>
  );
}
export default Home;
