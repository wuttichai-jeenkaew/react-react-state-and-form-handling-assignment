import { useState } from "react";



function ProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    let newErrors = {};
    if (!name) {
      newErrors.name = "Name is required.";
    }
    if (!image) {
      newErrors.image = "Image URL is required.";
    }
    if (!price) {
      newErrors.price = "Price is required.";
    } else if (price && price < 0) {
      newErrors.price = "Price cannot be less than 0.";
    }
    if (!description) {
      newErrors.description = "Description is required.";
    }
    if (!email) {
      {
        newErrors.email = "Email is required.";
      }
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format.";
    }
    console.log(Object.keys(newErrors).length);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    let newFormData = {
      name: name,
      image: image,
      price: price,
      description: description,
      email: email,
    };

    alert(JSON.stringify(newFormData));

    setName("");
    setImage("");
    setPrice("");
    setDescription("");
    setEmail("");
    setErrors({});
  }
  


  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        {errors.image && <p className="error-message">{errors.image}</p>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        {errors.price && <p className="error-message">{errors.price}</p>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
            cols={30}
          />
        </label>
        {errors.description && <p className="error-message">{errors.description}</p>}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
