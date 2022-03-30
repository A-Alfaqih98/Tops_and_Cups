import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Layout1 from './layouts/Layout1';
import Order from './pages/Order';
import Costume from './pages/Costume';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Layout1 />}>
              <Route index path="" element={<Home />} />
              <Route path="About" element={<About />} />
            </Route>
            <Route path="/Design" element={<Order />} />
            <Route path="/customize/:item" element={<Costume />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
