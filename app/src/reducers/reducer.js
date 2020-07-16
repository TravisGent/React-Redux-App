import { FETCH_DATA_START } from "../actions/actions";

const initialState = {
    isLoading: false,
    fetchedData: [],
    error: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}