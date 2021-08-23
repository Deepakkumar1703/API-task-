import { createStore , applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './Root-reducer';

const middlewares = [reduxThunk];

const Store = createStore(rootReducer, applyMiddleware(...middlewares))

export default Store;

