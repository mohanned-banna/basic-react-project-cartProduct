import React from 'react'
import { useProductContext } from '../contexts/productContext'
import ProductCart from '../components/ProductCart'

const Cart = () => {
  const {state,removeFromCart} = useProductContext()
  return (
    <div>
      {!state.products.length && 'No Products in the cart'}
      {state?.products?.map((product) =>{
        return <ProductCart key={product.id} {...{product}} >
                  <button onClick={() => removeFromCart(product.id)}>-</button>
              </ProductCart>
             
      })}
        <p>Product in count : {state.count}</p>
    </div>
  )
}

export default Cart
