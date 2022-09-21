import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

function* exampleSaga() {
  console.log("Example saga reached");
}

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  // countReducer, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(exampleSaga);