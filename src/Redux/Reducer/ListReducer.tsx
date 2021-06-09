const initialState = {
  data: "",
};

const reducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
