import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";
import { getProducts } from "../../services/products-http-service";

export default function SearchProductsInput() {
    const productsContext = useContext(ProductsContext)
    const [inputValue, setInputValue] = useState('');
    const [delayTimout, setDelayTimeout] = useState(null)

    const handleInputChange = async (event) => {
        setInputValue(event.target.value);

        if (delayTimout != null) {
            clearTimeout(delayTimout)
        }

        setDelayTimeout(setTimeout(async () => {
            productsContext.setProducts(null)
            const response = await getProducts(event.target.value)
            productsContext.setProducts(response.Items)
            productsContext.setSearchTerm(event.target.value)
            setDelayTimeout(null)
        }, 500))
    }

    useEffect(() => {
        if (productsContext.searchTerm) {
            setInputValue(productsContext.searchTerm)
        }
    },[])

    return <input
        className='input'
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        style={{ marginLeft: "10px", width: "400px", padding: "10px", marginRight: "100px" }}>
    </input>
}