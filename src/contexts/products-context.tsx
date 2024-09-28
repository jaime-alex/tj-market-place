import { createContext } from "react";

export const ProductsContext = createContext<{products: any[], setProducts: (a: any[]) => void}>(null)