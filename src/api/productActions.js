import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/slices/productsSlice";

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
