import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Resources from './pages/Resources'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Breastfeeding Consultant. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
