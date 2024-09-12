
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import AddProducts from './pages/addProducts'
import About from './pages/about'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addProducts' element={<AddProducts/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
