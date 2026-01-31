import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Automation from './pages/Automation';
import Webs from './pages/Webs';
import Ads from './pages/Ads';
import { About, Cases, Contact } from './pages/OtherPages';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="automatizacion" element={<Automation />} />
          <Route path="webs" element={<Webs />} />
          <Route path="ads" element={<Ads />} />
          <Route path="casos" element={<Cases />} />
          <Route path="nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
