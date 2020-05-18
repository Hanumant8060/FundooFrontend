import { createStore} from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
import provider from 'react-redux'

// import Reducer from "./reducer";
import Reducer from './Reducer'
const store = createStore(Reducer);

export default store;