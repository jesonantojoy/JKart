import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { addToCart, fetchdata } from '../reducer/addItem';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { selectItems } from '../Redux/selector';

const ProductDetail = () => {
  const { id } = useParams(); 
  const items = useSelector(selectItems); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  
  const product = items.find((item) => item.id === parseInt(id));

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  
  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className='container py-5'>
      <div className='row py-5'>
        <div className="col-md-6">
          <img
            src={product.image || 'default-image.jpg'}
            alt={product.title || 'Product Image'}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="lead">
            Rating: {product.rating ? product.rating.rate : 'No rating available'}
          </span>
          <h3 className="display-6 fw-bold my-4">{product.price}₹</h3>
          <p className='lead'>{product.description}</p>
          <button
            className='btn btn-outline-dark py-2'
            onClick={() => handleAddToCart(product.id)}
          >
            Add To Cart
          </button>
          <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
            Go To Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
