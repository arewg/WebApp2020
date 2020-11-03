import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({todo, removeTodo, addCompleted}) => (

  todo.map((todo) => <TodoCard {...todo} key={todo.id} removeTodo={removeTodo} addCompleted={addCompleted} />));

export default TodoCardList;
