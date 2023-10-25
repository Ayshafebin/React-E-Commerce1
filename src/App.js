import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Reset from './Components/Reset';
import { MyContext } from './Components/Context';
import Collection from './Components/Collection';
import Regestration from './Components/Regestration';
import ShowProduct from './Components/ShowProduct';
import { useState } from 'react';
import Admin_home from './Components/Admin/Admin_home';
import Adminviewproduct from './Components/Admin/Adminviewproduct';
import AdminMen from './Components/Admin/AdminMen';
import Adminviewuser from './Components/Admin/Adminviewuser';
import Adminwomen from './Components/Admin/Adminwomen';
import Editproduct from './Components/Admin/Editproduct';
import Addproduct from './Components/Admin/Addproduct';
import { Products } from './Components/ProductDatas';


function App() {
const [signup,setSignup]=useState([])
  const [Product,setProduct]=useState(Products)
  const [qty,setQty] = useState(1)
  const [cart,setCart]=useState([])
  const [cartItems, setCartItems] = useState([]);
  const [login, setLogin] = useState(false);
  const [username,setUsername]=useState("")
  return (
   <>
    <div className="App">
    <MyContext.Provider value={{Product,setProduct,qty,setQty,cart,setCart,cartItems, setCartItems,signup,setSignup,username,setUsername,login,setLogin}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart/' element={<Cart/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/regestration' element={<Regestration/>}/>
        <Route path='/showproduct/:id' element={<ShowProduct/>}/>

    <Route path='/admin' element={<Admin_home/>}/>
 <Route  element={<Admin_home/>}>
  <Route path='/adminviewproduct' element={<Adminviewproduct/>}/>
 <Route path='/adminMen' element={<AdminMen/>}/>
 <Route path='/adminviewuser' element={<Adminviewuser/>}/>
 <Route path='/adminwomen' element={<Adminwomen/>}/>
 <Route path='/editproduct/:id' element={<Editproduct/>}/> 
 <Route path= '/addproduct' element={<Addproduct/>}/>
  </Route>




      </Routes>


     
      </MyContext.Provider>
      
    </div>
    </> 
  );
}

export default App;
