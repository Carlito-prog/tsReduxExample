import "./App.css";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./App";
import { SelectCount, fromArNisha, fromLito } from "./counterSlice";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function BigHeader() {
  const state = useAppSelector(SelectCount);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <p>{state.theText}</p>
        <button
          placeholder="ArNisha's Action"
          aria-label="ArNisha's Action"
          className="button"
          type="button"
          onClick={() => dispatch(fromArNisha())}
        >
          ArNisha's Action
        </button>
        <button
          placeholder="Carlito's Action"
          aria-label="Carlito's Action"
          className="button"
          type="button"
          onClick={() => dispatch(fromLito())}
        >
          Carlito's Action
        </button>
      </div>
    </>
  );
}

export default BigHeader;
