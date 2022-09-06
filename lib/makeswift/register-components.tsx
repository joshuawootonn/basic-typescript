import {
  Combobox,
  Link,
  List,
  Shape,
  Style,
  TextInput,
  Number,
} from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";

import {
  ProductImages,
  ProductBreadcrumbs,
  ProductDescription,
  ProductName,
  ProductPrice,
} from "components";
import { AddToCartButton } from "components/cart";
import { Header } from "components/header";
import { ProductList } from "components/product-list";
import { Collection } from "lib/shopify";

ReactRuntime.registerComponent(ProductList, {
  type: "product-list",
  label: "Product list",
  props: {
    className: Style({ properties: Style.All }),
    collectionId: Combobox({
      async getOptions() {
        return fetch(`/api/collections`)
          .then((r) => r.json())
          .then((collections: Collection[]) =>
            collections.map((collection) => ({
              id: collection.id.toString(),
              label: collection.title,
              value: collection.id.toString(),
            }))
          );
      },
      label: "Collection",
    }),
    count: Number({
      label: "Count",
      defaultValue: 4,
      max: 8,
      min: 1,
      labelOrientation: "horizontal",
      step: 1,
    }),
  },
});

ReactRuntime.registerComponent(ProductImages, {
  type: "product-images",
  label: "Product images",
  props: {
    className: Style({ properties: Style.All }),
  },
});

ReactRuntime.registerComponent(ProductPrice, {
  type: "product-price",
  label: "Product price",
  props: {
    className: Style({ properties: Style.All }),
  },
});

ReactRuntime.registerComponent(ProductBreadcrumbs, {
  type: "product-breadcrumbs",
  label: "Product breadcrumbs",
  props: {
    className: Style({ properties: [Style.Margin, Style.Width] }),
  },
});

ReactRuntime.registerComponent(ProductName, {
  type: "product-name",
  label: "Product name",
  props: {
    className: Style({ properties: Style.All }),
  },
});

ReactRuntime.registerComponent(ProductDescription, {
  type: "product-description",
  label: "Product description",
  props: {
    className: Style({ properties: Style.All }),
  },
});

ReactRuntime.registerComponent(Header, {
  type: "header",
  label: "Header",
  props: {
    className: Style({ properties: Style.All }),
    links: List({
      type: Shape({
        type: {
          link: Link(),
          text: TextInput({ label: "Text" }),
        },
      }),
      label: "Links",
      getItemLabel: (item) => item?.text ?? "",
    }),
  },
});

ReactRuntime.registerComponent(AddToCartButton, {
  type: "add-to-cart-button",
  label: "Add to cart button",
  props: {
    className: Style({ properties: [Style.Margin] }),
  },
});
