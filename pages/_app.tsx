import { ProductsContext } from "lib/products-context";
import { ProductContext } from "lib/product-context";

export default function App({ Component, pageProps }: any) {
  return (
    <ProductsContext.Provider value={pageProps.products}>
      <ProductContext.Provider value={pageProps.product}>
        <Component {...pageProps} />
      </ProductContext.Provider>
    </ProductsContext.Provider>
  );
}
