const initialState = {
  isLoading: false,
  kpiData: [],
  productionSummary: {},
  timeSummary: {}
};

export function equipmentSummary (state = initialState, action) {
  switch (action.type) {
    case "EQUIPMENTSUMMARY_FETCH_REQUEST":
      return {
        ...state,
        isLoading: true
      };

    case "EQUIPMENTSUMMARY_FETCH_FAILED":
      return {
        ...state,
        isLoading: false
      };

    case "EQUIPMENTSUMMARY_FETCH_SUCCESS": {
      const { kpiData, timeSummary, productionSummary } = action;
      return {
        isLoading: false,
        kpiData,
        timeSummary,
        productionSummary
      };
    }

    default: return state; // Do nothing, we're not interested in this type of action
  }
}
