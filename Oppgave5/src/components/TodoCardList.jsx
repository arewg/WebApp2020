import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({list}) => (

  list.map((list) => <TodoCard key={list.id} {...list} />));

export default TodoCardList;
