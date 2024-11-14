import React from 'react';
import"../Dashboard/Dashboard.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Products from './products';


/* const spanStyle = {
   padding: '20px',
   background: '#efefef',
   color: '#000000'
 } */
 
 const divStyle = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundSize: 'cover',
   width:'100%',
   height: '300px',
   autoPlay:'true'
 }

 
 const slideImages = [
   {
     url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Feb/Citi/2._CB583981657_.jpg',
   },
   {
     url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Jan/unrecatf/citi/Makeup-PCcv._CB584595621_.jpg',
   
   },
   {
     url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/SVD/Feb24/GW/Unrec_PC_3000._CB583595285_.jpg',
   
   },
 ];
 
 


export default function Dashboard () {
  


return (
    <div>
      <section>
<div className="slide-container">
         <Slide>
          {slideImages.map((slideImage, index)=> (
             <div key={index}>
               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
               </div>
             </div>
           ))} 
         </Slide>
       </div>
       <h2> Trending Products</h2>
      <div>
     <Products/>
    </div>
  </section>
    </div>
   )
}
