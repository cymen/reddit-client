import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(initialState) {
  const reducer = combineReducers({
    ...reducers,
  });

  const middleware = applyMiddleware(thunkMiddleware);
  const enhancer = compose(
    middleware,
    (window && window.devToolsExtension)
      ? window.devToolsExtension()
      : (f) => f
  );

  const store = createStore(
    reducer,
    initialState,
    enhancer
  );

  return store;
}
