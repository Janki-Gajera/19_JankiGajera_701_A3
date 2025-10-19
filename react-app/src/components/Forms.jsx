import { useState, useRef } from 'react'

function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submissions, setSubmissions] = useState([])
  
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleStateChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleStateSubmit = (e) => {
    e.preventDefault()
    setSubmissions([...submissions, { ...formData, type: 'useState', id: Date.now() }])
    setFormData({ name: '', email: '', message: '' })
  }

  const handleRefSubmit = (e) => {
    e.preventDefault()
    const refData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      type: 'useRef',
      id: Date.now()
    }
    setSubmissions([...submissions, refData])
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>useState Form</h3>
        <form onSubmit={handleStateSubmit} className="mb-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleStateChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleStateChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleStateChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit (useState)</button>
        </form>
      </div>

      <div className="col-md-6">
        <h3>useRef Form</h3>
        <form onSubmit={handleRefSubmit} className="mb-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              ref={nameRef}
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              ref={emailRef}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              ref={messageRef}
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Submit (useRef)</button>
        </form>
      </div>

      <div className="col-12">
        <h3>Submissions</h3>
        {submissions.map(sub => (
          <div key={sub.id} className="card mb-2">
            <div className="card-body">
              <h6>{sub.name} ({sub.type})</h6>
              <p>Email: {sub.email}</p>
              <p>Message: {sub.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forms