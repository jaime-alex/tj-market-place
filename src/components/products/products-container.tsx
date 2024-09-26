import { useEffect, useState } from "react"
import styles from "./ProductsContainer.module.css"
import Product from "./product/product"
import { getProducts } from "../../services/products-http-service"

export default function ProductsContainer() {
    const [products, setProducts] = useState<Array<any>>(null)

    useEffect(() => {
        const fetchData = async () => { 
            return await getProducts("t") 
        }

        fetchData().then((res) => {
            console.log(res.Items)
            setProducts(res.Items)
        }).catch(console.error)
    },[])

    if (products == null) return <h1>Loading...</h1>

    return <div className={styles.productsContainer}>
        {products.map(_ => (<Product></Product>))}
    </div>
}