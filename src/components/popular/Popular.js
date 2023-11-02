import React, {useEffect,useContext, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../api/api";
import MoviCard from "../MoviCard/MoviCard";
import ani from "../../img/ani.svg";
import {LanguageContext} from "../language";


const Popular = () => {
    const [popular,setPopular] = useState([])
    const [total_pages,setTotal_pages] = useState(1)
    const [pages,setPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const getPopular = (Key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=${language}&page=${pages}`).then((res)=>{
            setPopular(res.data.results)
            setTotal_pages(res.data.total_pages)
            console.log(res.data)
    })
    }
    useEffect(()=>{
        setTimeout(()=>{
            getPopular(API_KEY)
        },2000)
    },[language,pages])

    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                    {
                  popular.length === 0 ? <img src={ani} alt=""/> : popular.map((el)=><MoviCard el={el}/>)
                    }
                    {   <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button onClick={() => setPage(pages - 1)} className='page-btn'>prev</button>
                        <button onClick={() =>  setPage(pages + 1)} className='page-btn'>next</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;