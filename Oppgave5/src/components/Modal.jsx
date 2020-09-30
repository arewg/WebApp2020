import React, { useState } from 'react';

const Modal = ({state, close}) => (
state ? (
    <section>DENNE BOKSEN SKAL VISES ETTER TRYKK
        <form>
            
        </form>
        <button type="button" onClick={close}>Close</button>
    </section>


) : (null));

export default Modal;
