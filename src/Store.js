import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import RootReducer from './Recucer/RootReducer';

const Store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default Store;