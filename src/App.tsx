
import './App.css'
import Home from './home/home';
import Identify from './identify/identify';
import NavBar from './nav-bar/nav-bar'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/identify" element={<Identify />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
