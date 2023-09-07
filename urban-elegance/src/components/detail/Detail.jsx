import React, { useEffect } from 'react';
import './Detail.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions';

const Detail = ({ productId }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="detail-container">
      <div key={product.id} className="product-detail">
        <h2 className="product-title-detail">{product.title}</h2>
        <img
          className="product-image-detail"
          src={product.image}
          alt={`Imagen de ${product.title}`}
        />
        <h3 className="product-price-detail">Price: ${product.price}</h3>
        <p className="product-description-detail">Description: {product.description}</p>
        <button className="product-button-detail-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Detail;
