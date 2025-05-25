import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './styles/Phaseone.css'
import Home from "./pages/Home.jsx"
import Testing from "./pages/Testing.jsx"
import Results from "./pages/Results.jsx"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/testing" element={<Testing />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </Router>
)

export default App
