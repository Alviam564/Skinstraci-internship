import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './styles/Phaseone.css'
import './styles/Phasetwo.css'
import './styles/Phasethree.css'
import Home from "./pages/Home.jsx"
import Testing from "./pages/Testing.jsx"
import Results from "./pages/Results.jsx"
import Select from "./pages/Select.jsx"
import Summary from "./pages/Summary.jsx"
import Camera from "./pages/Camera.jsx"
import Picture from "./pages/Picture.jsx"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/testing" element={<Testing />} />
      <Route path="/results" element={<Results />} />
      <Route path="/select" element={<Select />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/camera/picture" element={<Picture />} />
    </Routes>
  </Router>
)

export default App
