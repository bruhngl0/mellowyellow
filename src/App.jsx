import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'



import Products from './components/Products'
import Layout from './components/Layout';
import ScreenSix from './components/ScreenSix';
import Footer from './components/Footer';











function App() {


  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<Layout />}/>
        <Route path= "/screensix" element= {< ScreenSix/>} />
        <Route path= "/products" element={<Products />} />
        

      </Routes>
    </Router>
  )
}

export default App
