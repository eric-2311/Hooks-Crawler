import { combineReducers, createStore } from 'redux';
import knightReducer from '../features/knight/knight_reducer'

const rootReducer = combineReducers({
    knight: knightReducer
})

const store = createStore(
    rootReducer
)

export default store;