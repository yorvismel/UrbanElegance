import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProducts } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de importar los estilos CSS

import './Create.css';
import { Link } from 'react-router-dom';

const Create = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    image: '',
    rating: 0,
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Llama a la acción "createProducts" con los datos del nuevo producto
    dispatch(createProducts(formData))
      .then(() => {
        // Éxito: muestra una notificación
        toast.success('Producto creado con éxito', {
          position: 'top-right',
          autoClose: 3000, // Cierra automáticamente después de 3 segundos
        });
        // Limpia el formulario después de enviar los datos
        setFormData({
          title: '',
          price: 0,
          description: '',
          image: '',
          rating: 0,
          category: '',
        });
      })
      .catch((error) => {
        // Error: muestra una notificación de error
        toast.error('Error al crear el producto', {
          position: 'top-right',
          autoClose: 3000,
        });
        console.error('Error:', error);
      });
  };

  return (
    <div className="create-container">
      <h2>Create New Product</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Save</button>
        <Link to='/store'>
      <button>Back</button>
      </Link>

      {/* Agrega el ToastContainer al final del componente */}
      <ToastContainer />
    </div>
  );
};

export default Create;
