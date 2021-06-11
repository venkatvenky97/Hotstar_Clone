import { createStore } from "redux";
import reducer from "./Reducer/ListReducer";

export const store = createStore(reducer);

export default reducer;
