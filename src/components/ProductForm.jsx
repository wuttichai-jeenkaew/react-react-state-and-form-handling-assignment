import { useState } from "react"

function ProductForm() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState({})

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    let newError = {}

    if (!name) {
      newError.name = "Name is required"
    }
    if (!image) {
      newError.image = "Image URL is required"
    }
    if (!price) {
      newError.price = "Price is required"
    } else if (price && price < 0) {
      newError.price = "Price cannot be less than 0"
    }
    if (!description) {
      newError.description = "Description is required"
    }
    if (!email) {
      newError.email = "Email is required"
    } else if (!isValidEmail(email)) {
      newError.email = "Invalid email format"
    }

    setError(newError)
    return Object.keys(newError).length
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm() !== 0) {
      return
    }

    const data = {
      name,
      image,
      price,
      description,
      email,
    }

    alert(JSON.stringify(data))

    setName("")
    setImage("")
    setPrice("")
    setDescription("")
    setEmail("")
    setError({})
  }

  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className='input-container'>
        <label>
          Name
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Enter name here'
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
          />
        </label>
        {error.name && <p className='error-message'>{error.name}</p>}
      </div>
      <div className='input-container'>
        <label>
          Image Url
          <input
            id='image'
            name='image'
            type='text'
            placeholder='Enter image url here'
            onChange={(e) => {
              setImage(e.target.value)
            }}
            value={image}
          />
        </label>
        {error.image && <p className='error-message'>{error.image}</p>}
      </div>
      <div className='input-container'>
        <label>
          Price
          <input
            id='price'
            name='price'
            type='number'
            placeholder='Enter price here'
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            value={price}
          />
        </label>
        {error.price && <p className='error-message'>{error.price}</p>}
      </div>
      <div className='input-container'>
        <label>
          Description
          <textarea
            id='description'
            name='description'
            type='text'
            placeholder='Enter description here'
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
        {error.description && (
          <p className='error-message'>{error.description}</p>
        )}
      </div>
      <div className='input-container'>
        <label>
          User's email
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Enter your email here'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          />
        </label>
        {error.email && <p className='error-message'>{error.email}</p>}
      </div>
      <div className='form-actions'>
        <button type='submit'>Create</button>
      </div>
    </form>
  )
}

export default ProductForm
