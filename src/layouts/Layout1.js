import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Layout1() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout1;
