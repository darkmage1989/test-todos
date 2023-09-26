import {createStore} from 'redux'
import reducers from './reducers/combine'

export const store = createStore (reducers)