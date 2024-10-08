import { useContext, useEffect } from "react"
import styles from "./ProductsContainer.module.css"
import Product from "./product/product"
import { getProducts } from "../../services/products-http-service"
import { ProductsContext } from "../../contexts/products-context"

export default function ProductsContainer() {
    const productsContext = useContext(ProductsContext)

    const loadProducts = () => {
        if (productsContext.products?.length > 0) {
            return
        }
        
        const fetchData = async () => { 
            return await getProducts("") 
        }

        fetchData().then((res) => {
            productsContext.setProducts(res.Items)
        }).catch(console.error)
    }

    useEffect(() => {
        loadProducts()
    },[])

    if (productsContext.products == null) return <div id="loader" className="loader"></div>

    return <div className={styles.productsContainer}>
        {productsContext.products.map((product, i) => (<Product key={i} {...product}></Product>))}
    </div>
}