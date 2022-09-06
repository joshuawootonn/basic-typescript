import { ProductsContext } from "lib/products-context";
import { ProductContext } from "lib/product-context";
import { CartProvider } from "lib/cart-context";

export default function App({ Component, pageProps }: any) {
  return (
    <CartProvider>
      <ProductsContext.Provider value={pageProps.products}>
        <ProductContext.Provider value={pageProps.product}>
          <Component {...pageProps} />
        </ProductContext.Provider>
      </ProductsContext.Provider>
    </CartProvider>
  );
}
