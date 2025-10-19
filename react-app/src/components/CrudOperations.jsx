import { useState, useEffect } from 'react'

function CrudOperations() {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', age: '' })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)

  // Simulate API calls with localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem('users')
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers))
    }
  }, [])

  const saveToStorage = (userData) => {
    localStorage.setItem('users', JSON.stringify(userData))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    if (editingId) {
      // Update existing user
      const updatedUsers = users.map(user => 
        user.id === editingId 
          ? { ...user, ...formData }
          : user
      )
      setUsers(updatedUsers)
      saveToStorage(updatedUsers)
      setEditingId(null)
    } else {
      // Create new user
      const newUser = {
        id: Date.now(),
        ...formData
      }
      const newUsers = [...users, newUser]
      setUsers(newUsers)
      saveToStorage(newUsers)
    }
    
    setFormData({ name: '', email: '', age: '' })
    setLoading(false)
  }

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, age: user.age })
    setEditingId(user.id)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const updatedUsers = users.filter(user => user.id !== id)
      setUsers(updatedUsers)
      saveToStorage(updatedUsers)
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({ name: '', email: '', age: '' })
    setEditingId(null)
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <h3>{editingId ? 'Edit User' : 'Add User'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              required
            />
          </div>
          <div className="d-flex gap-2">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Processing...' : (editingId ? 'Update' : 'Add')}
            </button>
            {editingId && (
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="col-md-8">
        <h3>Users List ({users.length})</h3>
        {users.length === 0 ? (
          <div className="alert alert-info">No users found. Add some users to get started.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => handleEdit(user)}
                        disabled={loading}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
                        disabled={loading}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default CrudOperations