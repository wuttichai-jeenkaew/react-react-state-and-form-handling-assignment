import { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: type === "number" ? parseFloat(value) || "" : value,
    }));

    // ✅ ล้าง error ของ field นั้นเมื่อเริ่มพิมพ์
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.image.trim()) newErrors.image = "Image is required.";

    if (formData.price === "") {
      newErrors.price = "Price is required.";
    } else if (formData.price < 0) {
      newErrors.price = "Price cannot be less than 0.";
    }

    if (!formData.description.trim())
      newErrors.description = "Description is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert(JSON.stringify(formData, null, 2));

      setFormData({
        name: "",
        image: "",
        price: "",
        description: "",
        email: "",
      });

      setErrors({});
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>

      <div className="input-container">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Enter name here"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p className="error error-message">{errors.name}</p>}
      </div>

      <div className="input-container">
        <label>
          Image URL
          <input
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        {errors.image && <p className="error error-message">{errors.image}</p>}
      </div>

      <div className="input-container">
        <label>
          Price
          <input
            name="price"
            type="number"
            placeholder="Enter price here"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        {errors.price && <p className="error error-message">{errors.price}</p>}
      </div>

      <div className="input-container">
        <label>
          Description
          <textarea
            name="description"
            placeholder="Enter description here"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
        {errors.description && (
          <p className="error error-message">{errors.description}</p>
        )}
      </div>

      <div className="input-container">
        <label>
          User's Email
          <input
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p className="error error-message">{errors.email}</p>}
      </div>

      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
