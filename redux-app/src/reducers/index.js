import { combineReducers } from "redux";

import employees from "./employeesReducer";
import movies from "./movieReducer";

export const rootReducer = combineReducers({
    employees: employees,
    movies: movies
})