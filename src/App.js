import './App.scss'

import {Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import TemplateV from './pages/home/Template/Vitrine/TemplateV'
import TemplateE from './pages/home/Template//Ecommerce/TemplateE'
import Realisation from './pages/Realisation/Realisation'
import Page404 from './pages/home/Page404'






function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vitrine" element={<TemplateV/>} />
        <Route path="/e-commerce" element={<TemplateE/>} />
        <Route path='/Realisation/:id' element={<Realisation/>}/>
        <Route path='/Realisation' element={<Realisation/>}/>
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
</div>
    
  );
}

export default App;
