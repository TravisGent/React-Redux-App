

export const FETCH_DATA_START = "FETCH_DATA_START";

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
  };
};