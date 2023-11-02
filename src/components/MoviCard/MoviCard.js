import React from 'react';
import {Link} from "react-router-dom";

const MoviCard = ({el}) => {
    return (
        <div className='popular--card'>
            <Link to={`/movie/dateils/${el.id}`}>
                <img  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
            </Link>
            <h3>{el.title}</h3>
            <h5>{el.release_date}</h5>
        </div>
    );
};
export default MoviCard;