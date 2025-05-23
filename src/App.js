import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './styles/Phaseone.css'
import Home from "./pages/Home.jsx"
import Testing from "./pages/Testing.jsx"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/testing" elsement={<Testing />} />
    </Routes>
  </Router>
)

export default App
