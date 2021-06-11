export interface DataState {
  data: Media[];
  user: null;
}

export interface Media {
  tv: string;
  movies: string;
  sports: string;
  news: string;
  premium: string;
  disney: string;
}

const initialState = {
  data: [],
  user: null,
};

export enum ActionTypes {
  AddToData = "ADD_TO_DATA",
  RemoveFromData = "REMOVE_FROM_DATA",
  SetUser = "SET_USER",
  EmptyData = "EMPTY_MOVIES",
}

export type Action = {
  type: ActionTypes;
  payload: Media;
  user: null;
};

export const reducer = (state: DataState = initialState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.AddToData: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    default:
      return state;
  }
};
export default reducer;
