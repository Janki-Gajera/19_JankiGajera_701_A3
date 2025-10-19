function Card({ children, title }) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5>{title}</h5>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

function Button({ children, variant = 'primary', onClick }) {
  return (
    <button className={`btn btn-${variant} me-2`} onClick={onClick}>
      {children}
    </button>
  )
}

function NestedComponents() {
  const handleClick = (action) => {
    alert(`${action} clicked!`)
  }

  return (
    <div className="row">
      <div className="col-12">
        <h2>Nested Components & Children (Containment)</h2>
        
        <Card title="User Profile">
          <p>This card contains user information.</p>
          <Button onClick={() => handleClick('Edit Profile')}>
            Edit Profile
          </Button>
          <Button variant="secondary" onClick={() => handleClick('View Details')}>
            View Details
          </Button>
        </Card>

        <Card title="Settings">
          <p>Configure your application settings here.</p>
          <Button variant="success" onClick={() => handleClick('Save Settings')}>
            Save Settings
          </Button>
          <Button variant="warning" onClick={() => handleClick('Reset')}>
            Reset to Default
          </Button>
        </Card>

        <Card title="Notifications">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="emailNotif" />
            <label className="form-check-label" htmlFor="emailNotif">
              Email Notifications
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="smsNotif" />
            <label className="form-check-label" htmlFor="smsNotif">
              SMS Notifications
            </label>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default NestedComponents