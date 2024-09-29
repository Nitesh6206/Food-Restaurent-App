import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Authentication/SignIn';
import SignUp from './Pages/Authentication/SignUp';
import About from './Pages/About/About';
import Navebar from './Component/Navebar/Navbar';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu/Menu';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contect/Contact';
import Cart from './Component/Cart/Cart';

function App() {
  return (
   <div className="App">
    <Router>
          <Navebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUP' element={<SignUp/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Order' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
   </div>
  );
}

export default App;
