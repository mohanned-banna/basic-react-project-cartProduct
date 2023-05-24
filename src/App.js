        /* router */
import { useLocation, useRoutes } from "react-router-dom";
import { router } from "./router";
        /* components */
import Header from "./components/Header";
import ProductProvider from "./contexts/productContext";

function App() {

  const routes = useRoutes(router);
  /* const loction = useLocation()
  console.log(loction.pathname) */

  return (
    <div className="App">
      <ProductProvider >
        <Header />
        {routes}
      </ProductProvider>
    </div>
  );
}

export default App;
