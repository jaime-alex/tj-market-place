import ProductsContainer from "../products/products-container";
import {ProductsContext} from "../../contexts/products-context"
import { useState } from "react";
import NavBar from "../nav-bar/nav-bar";

export default function Home() {
    const [products, setProducts] = useState(null)
    return <div>
        <ProductsContext.Provider value={{ products, setProducts }}>
            <NavBar></NavBar>
            <ProductsContainer/>
        </ProductsContext.Provider>
    </div>
}