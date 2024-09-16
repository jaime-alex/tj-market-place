
import './App.css'
import Home from './home/home';
import Identify from './identify/identify';
import NavBar from './nav-bar/nav-bar'
import {
  createBrowserRouter,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/identify",
    element: <Identify></Identify>
  }
]);

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
