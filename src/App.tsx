import './App.css';
import Sidebar from './SideBar';
import ImageCarousel from './ImageCarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Packages from './WorkPackage';
import RecentWorks from './RecentWorks'

export function Header() {
  return (
    <span className="header_span"></span>
  );
}

export function Footer() {
  return <span className='footer_text'>Developed By AG</span>;
}

function App() {
  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <ImageCarousel />
            <h1>Epic Media</h1>
            <p className="read-the-docs">Capture your best moments</p>
          </>
        } />
        <Route path="/recent-works" element={<RecentWorks/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/contact-us" element={<h2>Contact Us Content</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
