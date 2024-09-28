import { createContext } from "react";

export const ProductsContext = createContext<{
    searchTerm: string,
    setSearchTerm: (a: string) => void,
    products: any[], 
    setProducts: (a: any[]) => void
}>(null)