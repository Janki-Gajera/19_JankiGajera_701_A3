import { useState } from 'react'

function ListComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Banana', category: 'Fruit' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' }
  ])
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        name: newItem, 
        category: 'Other' 
      }])
      setNewItem('')
    }
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="row">
      <div className="col-12">
        <h2>List Component</h2>
        <div className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new item"
            />
            <button className="btn btn-primary" onClick={addItem}>Add</button>
          </div>
        </div>
        
        <div className="row">
          {items.map(item => (
            <div key={item.id} className="col-md-6 mb-2">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6>{item.name}</h6>
                    <small className="text-muted">{item.category}</small>
                  </div>
                  <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListComponent