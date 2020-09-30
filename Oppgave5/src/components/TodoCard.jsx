import React from 'react';

const TodoCard = ({id, title, description, author}) => (
    <li>
      <h2 className="todo-list-title">{title}</h2>
      <p className="todo-list-description">{description}</p>
      <p className="todo-list-author">{author}</p>
      <button type="button" className="todo-list-delete-button" name="Delete">
        Delete
      </button>
      <button type="button" className="todo-list-complete-button" name="Complete">
        Complete
      </button>
    </li>
);

export default TodoCard;
