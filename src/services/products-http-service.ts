import axios from "axios"

export const getProducts = async (term: string): Promise<any> => {
    const parsedParam = term?.trim() != "" ? `/${term}` : "";
    const response = await axios.get(`${import.meta.env.VITE_PRODUCTS_API_URL}/products${parsedParam}`)
    
    return response.data
}