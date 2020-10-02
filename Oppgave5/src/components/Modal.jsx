import React, { useState } from 'react';

const Modal = ({ modal, close, addTodo, handleTitle, handleDescription, handleAuthor }) => {

    const handleSubmit = (e) => {e.preventDefault(); addTodo();};

    const [fifty, setFifty] = useState(50);

    const limit = (e) => {

        setFifty(49 - e.target.value.length)

    };
return (   
modal ? (
    <section className="modal">
        <form onSubmit={handleSubmit}>
            <header id="modalHeader">
                <label id="modalTitle">New Todo</label>
                <a className="close" onClick={close}></a>
            </header>
                <div id="modalForm">
                    <label>Title</label>
                    <input type="text" name="title"  onChange={handleTitle} />
                    <label>Description {fifty < 1 ? ('(max characters reached)') : ('(' + fifty + ' characters left)')} </label>
                    <input type="text" name="description" maxLength={50} onKeyDown={limit} onChange={handleDescription}/>
                    <label>Author</label>
                    <input type="text" name="author"  onChange={handleAuthor}/>
                    <button type="submit" >Create</button>
                </div>
        </form>
    </section>
) : (null));};

export default Modal;
