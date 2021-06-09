import { createStore } from "redux";
import reducer from "./Reducer/ListReducer";

const store = createStore(reducer);

export default store;
