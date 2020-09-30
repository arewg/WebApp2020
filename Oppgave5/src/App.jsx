/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Search from './components/Search';
import CompletedList from './components/CompletedList';
import Navbar from './components/Navbar';
import TodoCardList from './components/TodoCardList';
import Modal from './components/Modal';
import TodoButton from './components/TodoButton';

const myList = [ 
    { id: 1, title: "Gjøre Webapplikasjoner", description: "Fikse React for første gang.", author: "Are"  },
    { id: 2, title: "Lage middag", description: "Kan ikke bare sitte stille, må spise og!", author: "Are" }
];

const App = () => {
    
    const title = "HIOF";
    const [search, setSearch] = useState('');
  //const [data, setData] = useState(''); Brukes for å hente inn todo-kortene?

  const handleSearch = (e) => {
    setSearch(e.target.value); 
    console.log(e.target.value);
  };

    const [state, setState] = useState(false);
    const showModal = () => {
      setState(true);
  };
  
    const closeModal =() => {
        setState(false);
    };

    return (
    <>
        <Navbar title={title} />
        <main>
            {/**
             * Section for New Todo Button
             */}

             <TodoButton knapp={showModal}/>

            {/**
             * Section for Active Todo Cards
             */}

            <section>
                {myList.length > 0 ? (<ul><TodoCardList list={myList} /></ul>) : (<p>TOMT</p>)}
            </section>
            
            {/**
             * Section for Search
             */}

            <Search handleSearch={handleSearch} search={search}/>
            <button onClick={console.log("hei")} type="button">Finn to do kort</button>

            {/**
             * Section for Completed Todo Table
             */}
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
            <CompletedList list={myList} />
                </tbody>
            </table>

            {/**
             * Section for pop-up modal window
             */}

            <Modal state={state} close={closeModal} />
        </main>
    </>
    );
}


export default App;
