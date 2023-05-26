import { generateId } from "../utils/generateId"

export const products = [
    { id: generateId(), name: "product1", price: 20, description : 'product1 is amazing' },
    { id: generateId(), name: "product2", price: 20, description : 'product2 is nice' },
    { id: generateId(), name: "product3", price: 20, description : 'product3 is good' },
]
