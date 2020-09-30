import React from 'react';

const TodoCard = ({id, title, description, author}) => (
  <ul>
    <li>
      <h2 className="todo-list-title">{title}</h2>
      <p className="todo-list-description">{description}</p>
      <p className="todo-list-author">{author}</p>
      <button className="todo-list-delete-button" name="Delete">
        Delete
      </button>
      <button className="todo-list-complete-button" name="Complete">
        Complete
      </button>
    </li>
  </ul>
);

export default TodoCard;
