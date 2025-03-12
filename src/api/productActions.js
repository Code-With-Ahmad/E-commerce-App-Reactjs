import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/slices/productsSlice";

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch product with ID: ${id}`);
    const data = await response.json();
    dispatch(fetchProductsSuccess([data]));
    return data;
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
    throw error;
  }
};
