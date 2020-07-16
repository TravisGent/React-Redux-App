import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.results})
      }) 
      .catch(error => console.log(error))
  };
};