import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducers'; // Adjust the path as needed
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Create the Redux store
export const store = createStore(
  rootReducer, // Pass the rootReducer
  undefined, // No preloaded state in this example
  applyMiddleware(sagaMiddleware) // Add middleware
);

// Run the root saga
sagaMiddleware.run(rootSaga);

// Export the store and dispatch types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
