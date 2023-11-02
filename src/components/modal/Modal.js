import React from 'react';

const Modal = ({el,modal}) => {
    return (
        <>
            <div style={{
                transform: modal ? "scale(1)" : "scale(0)"
            }} className='modal'>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} alt=""/>
                <div>
                    <h2 style={{
                        marginLeft:'70px',
                        marginTop:'30px'
                    }}>{el.title}</h2>
                </div>
            </div>
        </>
    );
};

export default Modal;