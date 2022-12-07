import { ActionReducer } from "../../utils/Reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.type";

import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  ActionReducer(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  ActionReducer(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  ActionReducer(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILURE, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCollectionAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
