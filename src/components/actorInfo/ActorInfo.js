import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../api/api";
import {useParams} from "react-router-dom";
import user from "../../img/user.png";




const ActorInfo = () => {
    const [info,setInfo] = useState({})
    const {userId} = useParams()
    const getActorsInfo = (Key) =>{
        axios(`https://api.themoviedb.org/3/person/${userId}?api_key=${Key}&language=en-US`).then((res)=>{
            setInfo(res.data)
        })
    }
    useEffect(()=>{
        getActorsInfo(API_KEY)
    },[])
    console.log(info)

    return (
        <>
            <div id='datailPage'>
                <div className="container">
                    <div className="datailPage">
                        <div style={{ width:'100%',
                            height:'80%'}} className='actorInfo--nav'>
                            {
                                info.profile_path ?  <img style={{width:'100%',height:'80%',  objectFit: 'cover'}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${info.profile_path}`} alt=""/> :<img width={'30%'}  src={user} alt=""/>
                            }
                        </div>
                        <div className='datailPage--block'>
                            <h2 style={{color:'black'}}>{info.name}</h2>
                            <h3 style={{paddingTop:'30px',paddingBottom:'20px'}}>biography</h3>
                            <p style={{width:'900px'}}>{info.biography}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ActorInfo;