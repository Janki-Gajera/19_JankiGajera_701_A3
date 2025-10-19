import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ConditionalRendering from './components/ConditionalRendering'
import ListComponent from './components/ListComponent'
import NestedComponents from './components/NestedComponents'
import Forms from './components/Forms'
import DigitalClock from './components/DigitalClock'
import FormValidation from './components/FormValidation'
import DataFiltering from './components/DataFiltering'
import CrudOperations from './components/CrudOperations'

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">React Demo</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/conditional">Conditional</Link>
            <Link className="nav-link" to="/list">List</Link>
            <Link className="nav-link" to="/nested">Nested</Link>
            <Link className="nav-link" to="/forms">Forms</Link>
            <Link className="nav-link" to="/clock">Clock</Link>
            <Link className="nav-link" to="/validation">Validation</Link>
            <Link className="nav-link" to="/filtering">Filtering</Link>
            <Link className="nav-link" to="/crud">CRUD</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conditional" element={<ConditionalRendering />} />
          <Route path="/list" element={<ListComponent />} />
          <Route path="/nested" element={<NestedComponents />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/clock" element={<DigitalClock />} />
          <Route path="/validation" element={<FormValidation />} />
          <Route path="/filtering" element={<DataFiltering />} />
          <Route path="/crud" element={<CrudOperations />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
