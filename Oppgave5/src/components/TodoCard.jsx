import React from 'react';

const TodoCard = ({id, title, description, author, removeTodo, addCompleted}) => (
    <div className="todoCardItem">
      <h2>{title}</h2>
      <p className="todoDescription">{description}</p>
      <p className="todoAuthor">{author}</p>
      <button className="todoComplete" type="button" onClick={() => addCompleted(id)}>
        Complete
      </button>
      <button className="todoDelete" type="button" onClick={() => removeTodo(id)} >
        Delete
      </button>
    </div>
);

export default TodoCard;
