import { createStore } from "redux";
import dialogReducer from "../reducers/dialogReducer";

const store = createStore(dialogReducer);
export default store;
