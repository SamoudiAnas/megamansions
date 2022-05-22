import { combineReducers } from "redux";
import homeSliderReducer from "./HomeSliderReducer";

const RootReducer = combineReducers({
  homeSliderReducer: homeSliderReducer,
});

export default RootReducer;
