import {
  MOVE_SLIDER_BACKWARD,
  MOVE_SLIDER_FORWARD,
} from "../actions/HomeSliderActions/action-types";

const initialState: number = 0;

const homeSliderReducer = (
  state: number = initialState,
  action: any
): number => {
  switch (action.type) {
    case MOVE_SLIDER_FORWARD:
      return state + 1;
    case MOVE_SLIDER_BACKWARD:
      return state - 1;
    default:
      return state;
  }
};

export default homeSliderReducer;
