import { Dispatch } from "redux";
import {
  SliderDispatch,
  MOVE_SLIDER_FORWARD,
  MOVE_SLIDER_BACKWARD,
} from "./action-types";

export const MoveSliderForward = () => (dispatch: Dispatch<SliderDispatch>) => {
  dispatch({
    type: MOVE_SLIDER_FORWARD,
  });
};

export const MoveSliderBackward =
  () => (dispatch: Dispatch<SliderDispatch>) => {
    dispatch({
      type: MOVE_SLIDER_BACKWARD,
    });
  };
