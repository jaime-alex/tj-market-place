
import './App.css'
import Home from './home/home';
import Identify from './identify/identify';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import NavBar from './nav-bar/nav-bar';
import { ProductsContext } from '../contexts/products-context';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState(null)
  const [searchTerm, setSearchTerm] = useState(null)

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts, searchTerm, setSearchTerm }}>
          <Router>
            <Routes>
              <Route path='/' element={<NavBar></NavBar>}>
                <Route index element={<Home />} />
                <Route path="/identify" element={<Identify />} />
              </Route>
            </Routes>
          </Router>
      </ProductsContext.Provider>
    </>
  )
}

export default App
