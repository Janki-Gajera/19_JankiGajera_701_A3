import { useState } from 'react'

function DataFiltering() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  
  const products = [
    { id: 1, name: 'iPhone 14', category: 'Electronics', price: 999 },
    { id: 2, name: 'MacBook Pro', category: 'Electronics', price: 1999 },
    { id: 3, name: 'Nike Shoes', category: 'Fashion', price: 120 },
    { id: 4, name: 'Adidas T-Shirt', category: 'Fashion', price: 45 },
    { id: 5, name: 'Coffee Maker', category: 'Home', price: 89 },
    { id: 6, name: 'Blender', category: 'Home', price: 65 },
    { id: 7, name: 'Samsung TV', category: 'Electronics', price: 799 },
    { id: 8, name: 'Sofa', category: 'Home', price: 599 }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
    const matchesPrice = priceFilter === 'all' || 
      (priceFilter === 'low' && product.price < 100) ||
      (priceFilter === 'medium' && product.price >= 100 && product.price < 500) ||
      (priceFilter === 'high' && product.price >= 500)
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="row">
      <div className="col-12">
        <h2>Live Data Filtering</h2>
        
        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select 
              className="form-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
            </select>
          </div>
          <div className="col-md-4">
            <select 
              className="form-select"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="low">Under $100</option>
              <option value="medium">$100 - $500</option>
              <option value="high">Over $500</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-3">
            <p>Showing {filteredProducts.length} of {products.length} products</p>
          </div>
          {filteredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    <span className="badge bg-secondary me-2">{product.category}</span>
                    <span className="text-success fw-bold">${product.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-12">
              <div className="alert alert-info">No products found matching your criteria.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DataFiltering