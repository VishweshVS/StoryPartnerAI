import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import StoryLoad from './components/storyload.jsx'
import StoryGenerator from './components/storygen.jsx'
function App() {

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Interactive Story Generator</h1>
        </header>
        <main>
          <Routes>
            <Route path={"/story/:id"} element={<StoryLoad />} />
            <Route path={"/"} element={<StoryGenerator />} />

          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
