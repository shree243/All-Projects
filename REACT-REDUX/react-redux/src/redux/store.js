 import todoReducers from './reducers/todo-reducers'

const {createStore, combineReducers}= require('redux');

 const rootReducer = combineReducers({todos:todoReducers,})
 const store = createStore(rootReducer)

 export default store;

