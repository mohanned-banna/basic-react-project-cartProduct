/* router */
import { /* useLocation, */ useRoutes } from "react-router-dom";
import { router } from "./router";
/* components */
import Header from "./components/Header";
import ProductProvider from "./contexts/productContext";
import ReactHookForm from "./components/ReactHookForm";
import FormikReact from "./components/FormikReact";
import { useTranslation } from "react-i18next";
import i18n from "./utils/i18nextt";
import { GlobalStyle } from "./styledComponent/style";



function App() {
  const routes = useRoutes(router);
  const { t } = useTranslation();
  /* const loction = useLocation()
  console.log(loction.pathname) */
  return (
    <div className="App">
      <ProductProvider>
        <Header />
        <h2>{t('Welcome to React')}</h2>
        <GlobalStyle dir ={i18n.language === 'en' ? 'ltr' : 'rtl'} />
        {routes}
        {/* <ReactHookForm /> */}
        {/* <FormikReact /> */}
      </ProductProvider>
    </div>
  );
}

export default App;
