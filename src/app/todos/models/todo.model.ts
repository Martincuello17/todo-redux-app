export class Todo {
    id: number;
    texto: string;
    completado: boolean;

    constructor(texto: string) {
        this.texto = texto;
        this.completado = false;
        this.id = Math.random();
    }
}