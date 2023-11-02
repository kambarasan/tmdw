import React, {useEffect,useContext, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../api/api";
import MoviCard from "../MoviCard/MoviCard";
import ani from "../../img/ani.svg";
import {LanguageContext} from "../language/index";


const TopRate = () => {
    const [popular,setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const getPopular = (Key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=${language}&page=1`).then((res)=>{
            setPopular(res.data.results)
            console.log(res.data)
        })
    }
    useEffect(()=>{
        setTimeout(()=>{
            getPopular(API_KEY)
        },2000)
    },[language])

    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                    {
                        popular.length === 0 ? <img src={ani} alt=""/> : popular.map((el)=><MoviCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRate;