import {
  createStore,
  combineReducers,
} from 'redux';

export default function configureStore(initialState) {
  const reducer = combineReducers({
  });
  const store = createStore(
    reducer,
    initialState
  );

  return store;
}
