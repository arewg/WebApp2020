import React, { useState } from 'react';
import CompletedListItem from './CompletedListItem';
import Search from './Search';



const CompletedList = ({ completed}) => {
  
  const [result, setResult] = useState([]);
  
  const addResult = (search) => {
    
    const newResult = completed.filter((dum) => dum.title === search);
    setResult(newResult);
    console.log("addresult  " + JSON.stringify(newResult));
};

  return(
  <>
  <pre>{JSON.stringify(result)}</pre>
  <Search addResult={addResult} />
  <p>Search result <br />
  Title {result.title}</p>
  <table className="completedTodoTable" >
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
