import React, { useState, useEffect } from "react";
import "../Dashboard/products.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchdata } from "../reducer/addItem";
import { selectItems } from '../Redux/selector';

const Products = () => {
  const product = useSelector(selectItems);
  const loading = useSelector(state => state.data.loading); // Get loading state
  const error = useSelector(state => state.data.error); // Get error state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);


  if (loading) {
    return <p>Loading products...</p>;  // Display loading indicator
  }

  if (error) {
    return <p>Error loading products: {error}</p>;  // Display error message
  }

  return (
    <div className="con1">
      {product && product.length > 0 ? (
        product.map((products, i) => (
          <div key={i} id="prop">
            <img src={products.image} alt="pic" />
            <h2>{products.title}</h2>
            <h6>Amount: {products.price} ₹</h6>
            <h6>Category: {products.category}</h6>

             <p>{products.description}</p>

            <NavLink to={`/products/${products.id}`} className="click">
              Buy now
            </NavLink>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Products;