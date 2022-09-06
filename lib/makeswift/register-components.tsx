import {
  Combobox,
  Link,
  List,
  Shape,
  Style,
  TextInput,
} from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";

import {
  ProductImages,
  ProductBreadcrumbs,
  ProductDescription,
  ProductName,
  ProductPrice,
} from "components";
import { Collection } from "lib/shopify";

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
