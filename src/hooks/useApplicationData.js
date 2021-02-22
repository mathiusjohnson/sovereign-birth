import { useEffect, useReducer } from "react";
import axios from 'axios'
import reducer, { SET_APPLICATION_DATA } from '../reducers/application'

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    businessData: {}
  });

  // RETRIEVES API AND SETS IT WITH REDUCER
  useEffect(() => {
      axios.get("/businessData.json").then((res) => {
      const businessData = res.data;
      dispatch({
        type: SET_APPLICATION_DATA,
        businessData,
      });
    });
  }, []);
  return {
    state
  };
}