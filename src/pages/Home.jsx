import { useProductContext } from '../contexts/productContext';

import ProductCart from "../components/ProductCart"
import { products } from "../mock/products"


const Home = () => {
    const {addToCart} = useProductContext()
    // console.log(products)

    return (
    <div>
       {products.map((product) =>{
        return <ProductCart key={product.id} {...{product}} >
            <button onClick={() => addToCart(product)}>+</button>
        </ProductCart>
              
      })}
    </div>
  )
}

export default Home
