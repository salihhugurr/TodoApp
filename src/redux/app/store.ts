import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import todoSlice from "../features/todo/todoSlice";
import categorySlice from "../features/categories/categorySlice";

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
};
const rootReducer = combineReducers({
  todos:todoSlice,
  categories:categorySlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
