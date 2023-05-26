import React from 'react'

const ProductCart = ({product,children}) => {
  return (
    <div>
            <li>
                <h3>name : {product.name} {children}</h3>
                <p>description : {product.description}</p>
                <p>price : {product.price}</p>
            </li>
    </div>
  )
}

export default ProductCart