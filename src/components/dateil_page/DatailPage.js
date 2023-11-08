import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../api/api";
import {useParams} from "react-router-dom";
import {AiOutlineHeart, AiOutlineStar} from "react-icons/ai";
import {BiBookmark} from "react-icons/bi";
import {RxHamburgerMenu} from "react-icons/rx";
import Actors from "../actors/Actors";
import Movie from "../movie/movie";
import Modal from "../modal/Modal";
import {useContext} from "react";
import {LanguageContext} from "../language";


const DatailPage = () => {
    const [modal,setModal] = useState(false)
    const [details,setDetails] = useState({})
    const {language} = useContext(LanguageContext)
    const {movieId} = useParams()
    const getDetails = (Key) =>{
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Key}&language=${language}`).then((res)=>{
            setDetails(res.data)
        })
    }
    useEffect(()=>{
        getDetails(API_KEY)
    },[language])
    console.log(details)


    return (
        <>
            <div style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
                 id='datailPage'>
                <div className="container">
                    <div className="datailPage">
                        <div onClick={()=> setModal(!modal)} className='datailPage--nav'>
                            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${details.poster_path}`} alt=""/>
                        </div>
                        <Modal  el={details} setModal={setModal} modal={modal}/>
                        <div className='datailPage--block'>
                            <h2>{details.title}</h2>
                            <div className='datailPage--block__link'>
                                <p><span>PG-13</span></p>
                                <p>
                                    <span>{details.release_date}</span>
                                </p>
                            </div>
                            <div className='datailPage--block__icons'>
                                <div className='datailPage--block__icons--vote'><h3>{Math.round(details.vote_average * 10)}%</h3></div>
                                <h4>Рейтинг</h4>
                                <div className='datailPage--block__icons--icon'><RxHamburgerMenu/></div>
                                <div className='datailPage--block__icons--icon heart'><AiOutlineHeart/></div>
                                <div className='datailPage--block__icons--icon'><BiBookmark/></div>
                                <div className='datailPage--block__icons--icon'><AiOutlineStar/></div>
                            </div>
                            <div className='datailPage--block__set'>
                                <p>
                                    <span>{details.tagline}</span>
                                </p>
                                <h1>Обзор</h1>
                                <p>{details.overview}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Actors/>
            <Movie/>
        </>
    );
};

export default DatailPage;