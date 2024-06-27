
import {  useGetProducts } from "./hooks/proGetProducts";
import './index.css';
import React from "react";

const Products = () => {
    const { products, error, loading } = useGetProducts();
  
    return (
      <>
        <div className="products-container">
          {loading && <h2>Loading products ...</h2>}
          {error && <h2>{error}</h2>}
          {products.length > 0 ? (
            <div className="product-list">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            !loading && <h2>No product found</h2>
          )}
        </div>
      </>
    );
  };
  
  export default Products;
  