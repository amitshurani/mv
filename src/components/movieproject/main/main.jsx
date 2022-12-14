import React from "react";
import { Route, Routes } from 'react-router-dom';
import Movies1 from "./../movies1";
import Action from "./actionmovies";
import Drama from "./dramamovies";
import Comedy from "./comedymovies";
import Fantasy from "./fantasymovies";
import Horror from "./horrormovies";
import Addmovie from "../addmovie";

const main = (props) => {
    const {pushmovie}=props
    return ( <React.Fragment>
                <Routes>
                    <Route path='/' element={<Movies1 {...props}/>}/>
                    <Route path='/action' element={<Action {...props}/>}/>
                    <Route path='/drama' element={<Drama {...props}/>}/>
                    <Route path='/comedy' element={<Comedy {...props}/>}/>
                    <Route path='/fantasy' element={<Fantasy {...props}/>}/>
                    <Route path='/horror' element={<Horror {...props}/>}/>
                    <Route path='/addmovie' element={<Addmovie pushmovie={(e,values)=>pushmovie(e,values)}/>}/>
                </Routes>
        </React.Fragment>
    );
}
 
export default main;