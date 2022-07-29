import { ActionReducerMap } from "@ngrx/store";
import { filtroReducer } from "./filtro/filter.reducers";
import { filtrosValidos } from "./filtro/filtro.actions";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducers";

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer,
}