import React, { useState } from 'react';
import CompletedListItem from './CompletedListItem';
import Search from './Search';



const CompletedList = ({ completed}) => {
  
  const [result, setResult] = useState([]);
  
  const addResult = (search) => {
    
    const newResult = completed.filter((dum) => dum.title.toLowerCase() === search.toLowerCase());
    setResult(newResult);
};

  return(
  <>
  
  {completed.length > 0 && (<><Search addResult={addResult} />
  
  <div id="searchResult">
    <p>Search Result<br />
    {result && result.map((result) => 
    <p><b>Title: </b>{result.title} <b>Description:</b> {result.description} <b>Author: </b>{result.author}</p>)}</p>
  </div></>)}
  
  <table id="completedTodoTable" >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {completed &&
                  completed.map((completed) => <CompletedListItem key={completed.id} {...completed} />)}
                </tbody>
            </table> 
  </>
);};

export default CompletedList;
