import { Dispatch } from "redux";
import {
  SliderDispatch,
  MOVE_SLIDER_FORWARD,
  MOVE_SLIDER_BACKWARD,
} from "./action-types";

export const MoveSliderForward =
  (max: number) => (dispatch: Dispatch<SliderDispatch>) => {
    dispatch({
      type: MOVE_SLIDER_FORWARD,
      payload: {
        index: 1,
        max: max,
      },
    });
  };

export const MoveSliderBackward =
  (max: number) => (dispatch: Dispatch<SliderDispatch>) => {
    dispatch({
      type: MOVE_SLIDER_BACKWARD,
      payload: {
        index: 1,
        max: max,
      },
    });
  };
