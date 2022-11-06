const PRODUCTS_HOST_URL =
  "https://xlsnxv701j.execute-api.eu-west-1.amazonaws.com/dev";
const IMPORT_HOST_URL =
  "https://mg5x1rw5k8.execute-api.eu-west-1.amazonaws.com/dev";

const API_PATHS = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: `${IMPORT_HOST_URL}/import`,
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  products: `${PRODUCTS_HOST_URL}/products`,
};

export default API_PATHS;
