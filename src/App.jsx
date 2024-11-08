import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Work from './Pages/Work';
import NoPage from './Pages/NoPage';
function App() {
  return (
    <>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout /> }>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='work' element={<Work />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>


  );
}

export default App;
