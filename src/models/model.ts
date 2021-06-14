export interface TodoList {id: number, text: string}
export interface updateState {onAdd: (text: string) => void}

export interface ItemsTodo {
    items: {
        id: number, 
        text: string
    }[],
    onDelete: (id: number) => void
}
 