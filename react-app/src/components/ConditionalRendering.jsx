import { useState } from 'react'

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState('guest')

  return (
    <div className="row">
      <div className="col-12">
        <h2>Conditional Rendering</h2>
        <div className="mb-3">
          <button 
            className={`btn ${isLoggedIn ? 'btn-danger' : 'btn-success'}`}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
        
        {isLoggedIn && (
          <div className="card">
            <div className="card-body">
              <h5>Welcome back!</h5>
              <select 
                className="form-select mb-3"
                value={userType} 
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="guest">Guest</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              
              {userType === 'admin' ? (
                <div className="alert alert-success">Admin Dashboard Access</div>
              ) : userType === 'user' ? (
                <div className="alert alert-info">User Dashboard Access</div>
              ) : (
                <div className="alert alert-warning">Limited Access</div>
              )}
            </div>
          </div>
        )}
        
        {!isLoggedIn && (
          <div className="alert alert-secondary">Please login to continue</div>
        )}
      </div>
    </div>
  )
}

export default ConditionalRendering