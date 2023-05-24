import Cart from "../pages/Cart"
import Home from "../pages/Home"

export const PATH = {
    HOME : "/",
    CART : "/cart"
}

export const router = [
    {index: true , element: <Home />},
    {path: PATH.CART , element: <Cart />}
]