import { useState } from 'react'

function FormValidation() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (name, value) => {
    let error = ''
    
    switch (name) {
      case 'username':
        if (value.length < 3) error = 'Username must be at least 3 characters'
        break
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) error = 'Invalid email format'
        break
      case 'password':
        if (value.length < 6) error = 'Password must be at least 6 characters'
        break
      case 'confirmPassword':
        if (value !== formData.password) error = 'Passwords do not match'
        break
    }
    
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  const getInputClass = (fieldName) => {
    if (errors[fieldName]) return 'form-control is-invalid'
    if (formData[fieldName] && !errors[fieldName]) return 'form-control is-valid'
    return 'form-control'
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Live Form Validation</h2>
        
        {isSubmitted && (
          <div className="alert alert-success">Form submitted successfully!</div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className={getInputClass('username')}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={getInputClass('email')}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={getInputClass('password')}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className={getInputClass('confirmPassword')}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  )
}

export default FormValidation