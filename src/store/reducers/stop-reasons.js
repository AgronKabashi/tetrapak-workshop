const initialState = {
  durationAscending: {},
  durationDescending: {},
  frequencyAscending: {},
  frequencyDescending: {},
  wasteAscending: {},
  wasteDescending: {}
};

export function stopReasons (state = initialState, action) {
  switch (action.type) {
    case "STOPREASONS_FETCH_SUCCESS": {
      return {
        ...action.data
      };
    }

    default: return state; // Do nothing, we're not interested in this type of action {},  }
  }
}
