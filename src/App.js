
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route,Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import TopRate from "./components/topRate/TopRate";
import DatailPage from "./components/dateil_page/DatailPage";
import ActorInfo from "./components/actorInfo/ActorInfo";


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/topRate'} element={<TopRate/>}/>
            <Route path={'/movie/dateils/:movieId'} element={<DatailPage/>}/>
            <Route path={'/movie/actor-info/:userId'} element={<ActorInfo/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
