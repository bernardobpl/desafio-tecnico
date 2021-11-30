import store, { rootReducer } from ".";

export interface ReduxAction<T> {
  type: string;
  payload?: T;
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
