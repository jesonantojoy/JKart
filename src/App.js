
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import Products from './Dashboard/products';
import Product1 from './Dashboard/Product1';
import Cart from './Dashboard/Cart';





function App() {
  return (
    <div>
      <BrowserRouter>
    
    <Layout/>
<Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="Products" element={<Products/>} />
          <Route path="Cart"element={<Cart/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="signin" element={<Signin/>} />
 </Routes>
          </BrowserRouter>
    </div>

  );
}

export default App;
