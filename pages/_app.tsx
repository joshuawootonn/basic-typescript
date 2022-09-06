import { ProductContext } from "lib/product-context";

export default function App({ Component, pageProps }: any) {
  return (
    <ProductContext.Provider value={pageProps.product}>
      <Component {...pageProps} />
    </ProductContext.Provider>
  );
}
