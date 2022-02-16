import productTypes from "./productTypes";

const initialState = {
  numOfProduct: 5,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case productTypes.ADD_PRODUCT:
      return {
        ...state,
        numOfProduct: state.numOfProduct + 1,
      };
    case productTypes.REMOVE_PRODUCT:
      return {
        ...state,
        numOfProduct: state.numOfProduct - 1,
      };
    default:
      return state;
  }
}

export default productReducer;
