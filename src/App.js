import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About'
import Footer from './Pages/Shared/Footer/Footer'
import './App.css';
import Header from './Pages/Shared/Header/Header';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/register' element={<Register></Register> }></Route>
      <Route path='/login' element={<Login></Login> }></Route>
      <Route path='/checkout' element={
        <RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
      }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}
 
export default App;
