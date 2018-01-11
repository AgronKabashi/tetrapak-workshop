import { fetchData } from "./equipment-performance";

export default {
  setFilterPeriod
};

export function setFilterPeriod (period) {
  return dispatch => {
    dispatch({ type: "CHANGE_FILTER_PERIOD", period });
    dispatch(fetchData());
  };
}
