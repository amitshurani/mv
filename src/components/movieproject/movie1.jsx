import React, { Component } from 'react';

const Movie1=(props)=>{
const {movieId,movieName,movieGenre,movieRating,delmovie,fullheart,movieHeart}=props;
        return (
            <React.Fragment>
                <tr>
                    <td>{movieId}</td>
                    <td>{movieName}</td>
                    <td>{movieGenre}</td>
                    <td>{movieRating}</td>
                    <td><i className={movieHeart} onClick={()=>fullheart()}/></td>
                    <td><button className="btn btn-outline-danger" onClick={()=>delmovie()} >Delete</button></td>
                </tr>
            </React.Fragment>
        );
}
export default Movie1;
