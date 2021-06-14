import React from 'react';
import {ItemsTodo} from '../models/model';
import './TodoList.css';


const TodoLi: React.FC<ItemsTodo> = props => {
    return (
        <ul>
            {props.items.map(todo =><li key={todo.id}><span>{todo.text}</span><button onClick={()=> props.onDelete(todo.id)}>DELETE</button></li>)}
        </ul>
    )
}

export default TodoLi;