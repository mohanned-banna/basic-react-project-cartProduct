import  {useReducer} from 'react'

const initialState = {
    count : 0,
    products :[]
}

const ACITIONS = {
    ADD_TO_CART : 'addToCart',
    REMOVE_FROM_CART : 'removeFromCart'
}

const reduce = (state ,action) => {
    switch(action.type){
        case ACITIONS.ADD_TO_CART:
             return{...state , products : [...state.products,action.payload ],count : state.count +1}
        case ACITIONS.REMOVE_FROM_CART : 
            return{...state , products : state.products.filter(product => product.id !== action.payload ), count : state.count -1}
        default : 
            return state;
    }
}
const useCart = () => {
    const [state,dispatch] = useReducer(reduce , initialState)

    const addToCart = (product) => dispatch({type:ACITIONS.ADD_TO_CART , payload: product})
    const removeFromCart = (productId) => dispatch({type:ACITIONS.REMOVE_FROM_CART ,payload: productId})
  return {state , addToCart , removeFromCart}
}

export default useCart