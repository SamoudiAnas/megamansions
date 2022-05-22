import { useDispatch } from "react-redux";
import Store from "./store";

export * from "./store";
export const useAppDispatch = () => useDispatch<typeof Store.dispatch>();
