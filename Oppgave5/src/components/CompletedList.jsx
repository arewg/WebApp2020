import React from 'react';
import CompletedListItem from './CompletedListItem';

const CompletedList = ({ list }) => (
    list &&
      list.map((list) => <CompletedListItem key={list.id} {...list} />)
);

export default CompletedList;
