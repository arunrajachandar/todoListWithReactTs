import React from 'react';
import {updateState} from '../models/model';
import './NewTodo.css';


const TodoInput: React.FC<updateState> = props => {

    const inputRef = React.useRef<HTMLInputElement>(null);

    const updateVal = (event: React.FormEvent) => {
        event.preventDefault();
        props.onAdd(inputRef.current!.value)
    }

    return (<form onSubmit={updateVal}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={inputRef}/>
        </div>
        <button type="submit">Add Todo</button>
    </form>)
}

export default TodoInput