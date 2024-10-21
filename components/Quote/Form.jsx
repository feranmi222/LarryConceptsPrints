import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quotation Request Sent: ' + JSON.stringify(formData));
  };

  return (
    <div className="form-container mt-10">
      <h2>Request a Quotation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Required</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Brochures">Brochures</option>
            <option value="Books">Books</option>
            <option value="Corporate Stationery">Corporate Stationery</option>
            <option value="Complimentary Cards">Complimentary Cards</option>
            <option value="Posters and Banners">Posters and Banners</option>
            <option value="Annual Reports">Annual Reports</option>
            <option value="Rigid/Textured Substrate Prints">Rigid/Textured Substrate Prints</option>
            <option value="Display Systems">Display Systems</option>
            <option value="Fabrics and Textiles">Fabrics and Textiles</option>
            <option value="Digital Wallpaper">Digital Wallpaper</option>
            <option value="Lightbox Prints">Lightbox Prints</option>
            <option value="Floor Graphics">Floor Graphics</option>
            <option value="Point of Sale Displays">Point of Sale Displays</option>
            <option value="Window Decals">Window Decals</option>
            <option value="Transit Advertising">Transit Advertising</option>
            <option value="Street Furniture">Street Furniture</option>
            <option value="Membership Register">Membership Register</option>
            <option value="Calendars of all types">Calendars of all types</option>
            <option value="Stage Making">Stage Making</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
