import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="nav">
      <div className="navContainer">
        <Link to="/">
          <div className="navLogo">Tops&Cups</div>
        </Link>
        <ul className="navList">
          <Link to="/">
            <li className="navItem">Home</li>
          </Link>
          <Link to="/Design">
            <li className="navItem">Designs</li>
          </Link>
          <Link to="/About">
            <li className="navItem">About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
