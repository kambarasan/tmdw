import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../api/api";

const ActorInfoSet = () => {
    const [person,setPerson] = useState({})
    const {personId} = useParams()
    const getActorsPerson = (Key) =>{
        axios(`https://api.themoviedb.org/3/movie/${personId}/credits?api_key=${Key}&language=en-US`).then((res)=>{
            setPerson(res.data)
        })
    }
    useEffect(()=>{
        getActorsPerson(API_KEY)
    },[])
    console.log(person)
    return (
        <div>

        </div>
    );
};

export default ActorInfoSet;