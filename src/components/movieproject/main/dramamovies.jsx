import React, { Component } from 'react';
import Movie1 from '../movie1';

const Drama = (props) => {
    const {delmovie,fullheart,activePage,pageVaid}=props;
    let filteredMovies=props.movies.filter(movie=>movie.genre=="drama")
    let shownMovies=filteredMovies.slice(
        (pageVaid)*(activePage-1),(pageVaid)*(activePage)
    );
    
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">MOVIE'S NUMBER</th>
                            <th scope="col">NAME</th>
                            <th scope="col">GENRE</th>
                            <th scope="col">RATING</th>
                            <th scope="col">LIKE? SAVE!</th>
                            <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shownMovies.map( movie => <Movie1 movieHeart={movie.heart} Key={movie.id} movieId={movie.id} movieName={movie.name} movieGenre={movie.genre} movieRating={movie.rating} delmovie={(id)=>delmovie(movie.id)} fullheart={(id)=>fullheart(movie.id)} />)}
                    </tbody>
                </table>    
            </React.Fragment>
        );
    }    

export default Drama;
