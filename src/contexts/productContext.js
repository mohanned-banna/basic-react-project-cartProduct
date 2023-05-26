import { createContext, useContext } from "react";
// import {products} from "../mock/products"
import useCart from "../hooks/useProductReducer";

export const productContext = createContext();

const ProductProvider = ({children}) =>{
    const cart = useCart(null)
    return  <productContext.Provider value={cart}>
                 {children}
            </productContext.Provider>
}

export default ProductProvider;

export const useProductContext = () =>{
    
    return useContext(productContext)
}