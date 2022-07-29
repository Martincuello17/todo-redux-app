import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState = 'todos' as filtrosValidos;

const _filterReducer = createReducer(
    initialState,
    on(setFiltro, (state, { filtro }) => filtro),
);

export function filtroReducer(state: any, action: any) {
    return _filterReducer(state, action);
}