import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import"../layout/layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faCartShopping , faSignIn} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'


export default function Layout() {

  const Cart=useSelector((item)=>item.data?.cart ||[])

 
  return (
    <div>
    <header id="header">
       <div className="logo">
        <img src='jk-logo.jpg' alt='pic'></img><h2>JK Kart</h2>
        </div>
      
       <input type='checkbox' id="click"></input>
       <label form='click' className="mainicon">
           <div className="menu" id="menu">
               <i className="bi bi-list"></i>
           </div>
       </label>
     <nav>
       <ul>
         <li>
           <Link to="/" className='a'>Home</Link>
         </li>
         <li>
           <Link to="/Products" className='a'>Products</Link>
         </li>
         <li>
           <Link to="/cart"className='a'> <FontAwesomeIcon icon={faCartShopping} /> Cart({Cart.length})</Link>
         </li>
         <li>
           <Link to="login"className='a'>  <FontAwesomeIcon icon={faUser} /> Login</Link>
         </li>
         <li>
           <Link to="signin"className='a'><FontAwesomeIcon icon={faSignIn} /> Sign In</Link>
         </li>
       </ul>
     </nav>
     </header>
     <div>
   
  </div>

     <Outlet/>

     
   </div>
)

};
