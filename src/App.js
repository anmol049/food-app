// import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {Route, Routes} from "react-router-dom"
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import NotFound from './components/Pages/NotFound';
import Menulist from './components/Menulist';
import AppLayout from './components/AppLayout';
// import GroceriesShop from './components/Pages/GroceriesShop';
import { Suspense, lazy } from 'react';
import CartPage from './components/Pages/CartPage';

function App() {
  const GroceriesShop = lazy(()=>import("./components/Pages/GroceriesShop"))
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<AppLayout/>}>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/contact'element={<ContactPage/>}></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            <Route path='/restaurants/:userid' element={<Menulist/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
            <Route path='/cart' element={<CartPage/>} ></Route>
            <Route path='/groceries' element={<Suspense fallback={<h1>ha bhai kya chlra hain</h1>}><GroceriesShop /></Suspense>}></Route>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App;
