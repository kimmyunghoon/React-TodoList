import React from 'react';
import '../index.css';

import Items from '../components/listitem.js';
function List ({todos,onToggle,onRemove}) { 
  
    return (
        <div>
        {todos.map(todo => (

         <Items id={todo.id} text={todo.text} checked={todo.checked} 
         onToggle={onToggle} onRemove={onRemove}/>
        ))}
        </div>
    );

}

export default List;