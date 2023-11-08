import React from 'react';
import {Link} from "react-router-dom";
import user from "../../img/user.png";

const MoviCard = ({el}) => {
    return (
        <div className='popular--card'>
            <Link to={`/movie/dateils/${el.id}`}>
                {
                    el.poster_path ?   <img  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                        : <img width={'45%'}  src={user} alt=""/>
                }
            </Link>
            <h3>{el.title}</h3>
            <h5>{el.release_date}</h5>
        </div>
    );
};
export default MoviCard;