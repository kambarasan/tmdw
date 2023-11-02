import axios from "axios";
import React, { useEffect, useState } from "react";
import {API_KEY} from "../api/api";
import {useParams} from "react-router-dom";
import Slider from "react-slick";

const Movie = () => {
    const [movie, setMovie] = useState([])
    const {movieId} = useParams()
    console.log(movieId)
    const getMovie = (Key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${Key}&language=en-US`).then((res) => {
            setMovie(res.data.results)
        })
    }
    useEffect(() => {
        getMovie(API_KEY)
    }, [])
    console.log(movie)

    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        speed: 500
    };

    return (
        <>
            <div className="container">
                <div style={{
                    paddingTop:'100px'
                }} className="movie">
                    <Slider  {...settings}>
                    {
                        movie.map((el) => (
                            <div className='actors--showActor'>
                                <iframe
                                    width="460"
                                    height="275"
                                    src={`https://www.youtube.com/embed/${el.Key}`}
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                        ></iframe>
                                        <h4>{el.name}</h4>
                            </div>
                        ))
                    }
                    </Slider>
                </div>
            </div>

        </>
    );
};

export default Movie;