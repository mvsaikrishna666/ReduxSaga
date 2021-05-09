import CounterReducer from './Reducers/CounterReducer'
import UsersReducer from './Reducers/UsersReducer'
import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import Rootsaga from './sagas/Rootsaga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({count:CounterReducer,users:UsersReducer})

const store=createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(Rootsaga)
export default store