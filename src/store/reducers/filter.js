const initialState = {
  period: "lastWeek"
};

export function filter (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FILTER_PERIOD":
      return {
        period: action.period
      };

    default: return state; // Do nothing, we're not interested in this type of action
  }
}
