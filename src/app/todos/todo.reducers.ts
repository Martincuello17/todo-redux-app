import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, toggle, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),
];

const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(limpiarCompletados, (state) => state.filter(todo => !todo.completado)),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            return {
                ...todo,
                completado: todo.id === id ? !todo.completado : todo.completado,
            }
        });
    }),
    on(toggleAll, (state, {completado}) => {
        return state.map(todo => {
            return {
                ...todo,
                completado: completado,
            }
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            return {
                ...todo,
                texto: todo.id === id ? texto : todo.texto,
            }
        });
    })
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}