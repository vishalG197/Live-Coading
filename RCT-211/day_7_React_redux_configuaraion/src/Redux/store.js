import {combineReducers, legacy_createStore} from "redux"

import { reducer as counterReducer } from "./reducer";
import { reducer as TodoReducer } from "./reducer";
const rootReducer=combineReducers({counterReducer,TodoReducer})
export const store=legacy_createStore(rootReducer);