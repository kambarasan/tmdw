import React, {useContext, useState,} from 'react';
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../language";
import {useNavigate} from 'react-router-dom'


const Header = ({dark,setDark}) => {
    const {setLanguage} = useContext(LanguageContext)
    const changeLanguage = (e) => setLanguage(e.target.value)
    const [search,setSearch] = useState("")
    const nav = useNavigate()

    return (
      <>
          <div id='header'>
              <div className="container">
                  <div className="header">
                      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt=""/>
                      <div className='header--nav'>
                          <NavLink className='header--nav__link' to={'/'} >Home</NavLink>
                          <NavLink className='header--nav__link' to={'/popular'}>Popular</NavLink>
                          <NavLink className='header--nav__link' to={'/topRate'}>TopRate</NavLink>
                      </div>
                      <select name='' id='' onChange={changeLanguage}>
                          <option value='en-US'>english</option>
                          <option value='ru-RU'>русский</option>
                      </select>
                      <div className='header--search'>
                          <input onChange={(event) => setSearch(event.target.value)} type="text"/>
                          <button onClick={() => nav(`/movie/search/${search}`)}>search</button>
                          <button onClick={() => setDark(!dark)}>dark</button>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
};

export default Header;