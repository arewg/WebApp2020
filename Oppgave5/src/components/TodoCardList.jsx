import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({list}) => (


  list ? (
    list.map((list) => <TodoCard key={list.id} {...list} />)
  ) : (
    <p>Listen er tom</p>
));

export default TodoCardList;
