import axios from 'axios';
import {GET_PRODUCTS, CREATE_PRODUCTS} from './actions-types'


export const fetchProducts = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          "https://urbanelegance.onrender.com/products"
        );
        const products = response.data;
        dispatch({ type: GET_PRODUCTS, payload: products });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  export const createProducts = (newProductData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(
          "https://urbanelegance.onrender.com/products",
          newProductData
        );
        const product = response.data;
        dispatch({ type: CREATE_PRODUCTS, payload: product });
      } catch (error) {
        console.error("Error creating product:", error);
      }
    };
  };