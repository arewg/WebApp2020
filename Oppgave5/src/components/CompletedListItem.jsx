import React from 'react';

const newDate = new Date()
const day = newDate.getDate();
const month = newDate.getUTCMonth()+1;

const date = day+"/" +month;

const CompletedListItem = ({title, description, author }) => (
    <tr>
      <th>{title}</th>
      <th>{description}</th>
      <th>{author}</th>
      <th>{date}</th>
    </tr>
);

export default CompletedListItem;
