import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Consultation from './pages/Consultation/Consultation.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/consultation' element={<Consultation />} />
      </Routes>
    </Router>
  )
}
