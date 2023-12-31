import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import BigHeader from "./bigHeader";
import { counterSlice } from "./counterSlice";
import { Provider } from "react-redux";
import BagBody from "./bagBody";

export const store = configureStore({
  reducer: counterSlice.reducer,
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <BigHeader />
      <BagBody/>
    </Provider>
  );
}

export default App;
