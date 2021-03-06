import {
  createStore,
  applyMiddleware,
  StoreEnhancer,
  StoreEnhancerStoreCreator,
  Store,
} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/counter1";

let storeEnhancer: StoreEnhancer = applyMiddleware(thunk);
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(
  createStore
);
let store: Store = storeEnhancerStoreCreator(reducer);

export default store;
