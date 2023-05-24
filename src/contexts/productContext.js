import { createContext } from "react";
import {products} from "../mock/products"

export const productContext = createContext();

const ProductProvider = ({childern}) =>{
    return  <productContext.Provider value={products}>
                 {childern}
            </productContext.Provider>
}

export default ProductProvider;