/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Search from './components/Search';
import CompletedList from './components/CompletedList';
import Navbar from './components/Navbar';
import TodoCardList from './components/TodoCardList';
import Modal from './components/Modal';
import TodoButton from './components/TodoButton';
import './App.scss';


const App = () => {
    
    const myList = [ 
        { id: 1, title: "Gjøre Webapplikasjoner", description: "Fikse React for første gang.", author: "Are"  },
        { id: 2, title: "Lage middag", description: "Kan ikke bare sitte stille, må spise og!", author: "Are" }
    ];

    const titleOfPage = 'HIOF';
    const [todo, setTodo] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');


    const showModal = () => {setModal(true);};
    const closeModal =() => {setModal(false);};

    const addTodo = () => {
        setTodo([{id: guidGenerator(), title: title, description: description, author: author}, ...todo]);
        setModal(false);
    };

    function guidGenerator() {
        let S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    const addCompleted = (id) => {
        const newCompleted = todo.filter((todos) => todos.id === id)
        setCompleted(newCompleted.concat(completed))
        removeTodo(id);
    }

    const removeTodo = (id) => {
        const newTodo = todo.filter((todos) => todos.id !== id);
        setTodo(newTodo);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleAuthor = (e) => {
        setAuthor(e.target.value);
    };

    return (
    <>
        
        <main>
        <Navbar />
            {/**
             * Section for New Todo Button
             */}

             <TodoButton knapp={showModal}/>

            {/**
             * Section for Active Todo Cards
             */}

            <section id="todoSection">
                {todo && todo.length > 0 ? (<div className="todoCard"><TodoCardList todo={todo} removeTodo={removeTodo} addCompleted={addCompleted} /></div>) : (<p id="jippi">😀 INGEN TODOS! </p>)}
            </section>
            
            {/**
             * Section for Search
             */}

          
            {/* <button onClick={console.log('hei')} type="button">Finn to do kort</button> */}

            {/**
             * Section for Completed Todo Table
             */}
           
           
           <CompletedList completed={completed} />

            {/**
             * Section for pop-up modal window
             */}

            <Modal modal={modal} close={closeModal} addTodo={addTodo} handleAuthor={handleAuthor}
                handleDescription={handleDescription} handleTitle={handleTitle} />
        </main>
    </>
    );
}


export default App;
