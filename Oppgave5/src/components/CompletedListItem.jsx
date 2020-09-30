import React from 'react';
import CompletedList from './CompletedList';

const CompletedListItem = ({ id, title, name, description, author }) => (
    <tr>
      <th>{title}</th>
      <th>{description}</th>
      <th>{author}</th>
    </tr>
);

export default CompletedListItem;
