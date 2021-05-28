import { createStore } from "redux";
import reducer from "../Redux/Reducer/ListReducer";

const store = createStore(reducer);

export default store;
