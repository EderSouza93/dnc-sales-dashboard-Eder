import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </Router>
  )
}

export default App
