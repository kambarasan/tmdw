import React, {useState} from 'react';
import axios from "axios";
import {useEffect} from "react";
import {API_KEY} from "../api/api";
import {Link, useParams} from "react-router-dom";
import user from '../../img/user.png'
import Slider from "react-slick";


const Actors = () => {
    const [actors, setActors] = useState([])
    const {movieId} = useParams()
    console.log(movieId)
    const getActors = (Key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Key}&language=en-US`).then((res) => {
            setActors(res.data.crew)
        })
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    console.log(actors)

    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500
    };
    return (

        <>
            <div className="container">
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el) => (
                                <div className='actors--showActor'>
                                    <Link to={`/movie/actor-info/${el.id}`}>
                                        {
                                            el.profile_path ?  <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                                                    alt=""/> : <img width={'65%'}
                                                                                    height={'60%'} src={user} alt=""/>
                                        }
                                        <h1 style={{width:'200px'}}>{el.name}</h1>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>


                </div>
            </div>
        </>
    );
};

export default Actors;