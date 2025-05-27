import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || isNaN(price)) {
      alert("Please enter valid name and numeric price.");
      return;
    }
    try {
      await axios.post('http://localhost:5000/register', { name, price });
      alert("Product Registered!");
      setName('');
      setPrice('');
    } catch {
      alert("Submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <h4>Product Registration</h4>
      <input  type='text' className="form-control mb-3" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type='number' className="form-control mb-3" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button className="btn btn-success" type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;