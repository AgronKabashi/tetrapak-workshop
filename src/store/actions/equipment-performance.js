export default {
  fetchData,
  fetchEquipmentSummary,
  fetchStopReasons
};

export function fetchData () {
  return dispatch => {
    Promise.all([
      dispatch(fetchEquipmentSummary()),
      dispatch(fetchStopReasons())
    ])
      .then(() => { // eslint-disable-line
        // all parallell requests are done
      })
      .catch(() => {
        // one of them failed
      });
  };
}

export function fetchEquipmentSummary () {
  return (dispatch, getState) => {
    dispatch({ type: "EQUIPMENTSUMMARY_FETCH_REQUEST" });
    const { filter } = getState();

    return fetch(`http://localhost:3001/GetKpiDataByTime?period=${filter.period}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "EQUIPMENTSUMMARY_FETCH_SUCCESS", ...data[0] });
        return data;
      })
      .catch(error => {
        dispatch({ type: "EQUIPMENTSUMMARY_FETCH_FAILED" });
        throw error;
      });
  };
}

export function fetchStopReasons () {
  return dispatch => {
    // dispatch({ type: "STOPREASONS_FETCH_REQUEST" });

    return fetch("http://localhost:3001/GetStopReasons")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "STOPREASONS_FETCH_SUCCESS", ...data });
        return data;
      })
      .catch(error => {
        dispatch({ type: "STOPREASONS_FETCH_FAILED" });
        throw error;
      });
  };
}
