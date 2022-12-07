import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
// import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
// import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);
const composeEnhance =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhance = composeEnhance(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, undefined, composedEnhance);
// sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
