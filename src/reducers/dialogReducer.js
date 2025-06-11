const initialState = {
  isOpen: false,
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "open": {
      return { ...state, isOpen: true };
    }
    case "close": {
      return { ...state, isOpen: false };
    }
    default: {
      return state;
    }
  }
};

export default dialogReducer
