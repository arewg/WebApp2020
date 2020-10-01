import React from 'react';

const TodoCard = ({id, title, description, author, removeTodo, addCompleted}) => (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{author}</p>
      <button type="button" onClick={() => removeTodo(id)} >
        Delete
      </button>
      <button type="button" onClick={() => addCompleted(id)}>
        Complete
      </button>
    </li>
);

export default TodoCard;
