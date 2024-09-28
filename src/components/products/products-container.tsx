import { useContext, useEffect, useState } from "react"
import styles from "./ProductsContainer.module.css"
import Product from "./product/product"
import { getProducts } from "../../services/products-http-service"
import { ProductsContext } from "../../contexts/products-context"

export default function ProductsContainer() {
    const productsContext = useContext(ProductsContext)

    useEffect(() => {
        const fetchData = async () => { 
            return await getProducts("t") 
        }

        fetchData().then((res) => {
            console.log(res.Items)
            productsContext.setProducts(res.Items)
        }).catch(console.error)
    },[])

    if (productsContext.products == null) return <h1>Loading...</h1>

    return <div className={styles.productsContainer}>
        {productsContext.products.map(product => (<Product {...product}></Product>))}
    </div>
}