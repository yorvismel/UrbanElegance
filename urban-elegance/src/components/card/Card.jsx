import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions';
import './Card.css';
import { Link } from 'react-router-dom';
import Detail from '../detail/Detail';

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const showProductDetail = (productId) => {
    setSelectedProduct(productId);
  };

  // Función para volver a la lista de productos
  const backToList = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="card-container">
      {selectedProduct ? (
        // Mostrar los detalles del producto seleccionado
        <div className="product-detail">
          <button onClick={backToList}>Back to List</button>
          <Detail productId={selectedProduct} />
        </div>
      ) : (
        // Mostrar la lista de productos
        products.map((product) => (
          <div key={product.id} className="product">
            <h2 className="product-title">{product.title}</h2>
            <img
              className="product-image"
              src={product.image}
              alt={`Imagen de ${product.title}`}
            />
            <h3 className="product-price">Price: ${product.price}</h3>
            <p className="product-description">Description: {product.description}</p>
            <button className="product-button" onClick={() => showProductDetail(product.id)}>
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
