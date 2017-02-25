import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerReducer } from 'react-router-redux';

import zen from './containers/Zen/reducer';

const rootReducer = combineReducers({
  zen,
  routing: routerReducer,
});

const store = createStore(rootReducer, composeWithDevTools({})(
  applyMiddleware(thunkMiddlware),
));

export default store;
