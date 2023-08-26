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
import { Product } from './Components/ProductDatas';
import Collection from './Components/Collection';
import Regestration from './Components/Regestration';
import ShowProduct from './Components/ShowProduct';
import { useState } from 'react';



function App() {

  const [addProduct,setProduct]=(Product)
  const [qty,setQty] = useState(1)
  const [cart,setCart]=useState([])
  return (
   <>
    <div className="App">
    <MyContext.Provider value={{Product,addProduct,qty,setQty,cart,setCart}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart/:id' element={<Cart/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/regestration' element={<Regestration/>}/>
        <Route path='/showproduct/:id' element={<ShowProduct/>}/>
      </Routes>

     
      </MyContext.Provider>
    </div>
    </> 
  );
}

export default App;
