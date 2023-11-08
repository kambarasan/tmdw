import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../api/api";
import MoviCard from "../MoviCard/MoviCard";

const Search = () => {
    const {movieName} = useParams()
    const [names,setNames] = useState([])

    const getSearch =(Key) =>{
        axios(` https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${movieName}`)
            .then((res)=>setNames(res.data.results))
    }

    useEffect(() =>{
        getSearch(API_KEY)
    },[names])
    console.log(names)
    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                    {
                        names.map((el)=> <MoviCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;