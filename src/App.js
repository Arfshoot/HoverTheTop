import './App.scss'

import {Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Contact from './pages/contact/contact'
import Qui from './pages/qui/qui'
import Realisation from './pages/realisation/realisation'





function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Qui" element= {<Qui />} />
        <Route path="/Réalisations" element={<Realisation />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
    </Routes>
</div>
    
  );
}

export default App;
