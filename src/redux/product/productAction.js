import productTypes from "./productTypes";

export function addProduct() {
  return { type: productTypes.ADD_PRODUCT };
}

export function removeProduct() {
  return { type: productTypes.REMOVE_PRODUCT };
}
