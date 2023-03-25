import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About'
import Footer from './Pages/Shared/Footer/Footer'
import './App.css';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
