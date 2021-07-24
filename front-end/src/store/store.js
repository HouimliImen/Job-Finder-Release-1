import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootreducer from '../reducers';

// export default createStore(rootreducer,applyMiddleware(thunk))
export default createStore(rootreducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
