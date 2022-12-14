import React, { Component } from 'react';
import  Main  from "./main/main";
import  Sider  from "./sider";
import  Header from "./header";
import  Footer from "./footer";
import "./moviely.css";

class Moviely extends Component {
    
    state = {  
        activePage:1,
        pageVaid:5,    
        newmovies:[],
        movies:[
            {
                id:0,
                name: 'die hard',
                genre: 'action',
                rating: '8/10',
                heart: "bi bi-heart",
            },
            {
                id:1,
                name: 'die hard2',
                genre: 'action',
                rating: '7.3/10',
                heart: "bi bi-heart",
            },
            {
                id:2,
                name: 'fast five',
                genre: 'action',
                rating: '6.7/10',
                heart: "bi bi-heart",
            },
            {
                id:3,
                name: 'Taken',
                genre: 'action',
                rating: '5.2/10',
                heart: "bi bi-heart",
            },
            {
                id:4,
                name: 'fast and furious',
                genre: 'action',
                rating: '8.5/10',
                heart: "bi bi-heart",
            },
                {
                    id:5,
                    name: 'the dictator',
                    genre: 'comedy',
                    rating: '7.5/10',
                    heart: "bi bi-heart",
                },
                {
                    id:6,
                    name: '21 jumpstreet',
                    genre: 'comedy',
                    rating: '7.6/10',
                    heart: "bi bi-heart",
                },
                {
                    id:7,
                    name: 'centeral intelligence',
                    genre: 'comedy',
                    rating: '6.9/10',
                    heart: "bi bi-heart",
                },
                {
                    id:8,
                    name: 'red notice',
                    genre: 'comedy',
                    rating: '5.8/10',
                    heart: "bi bi-heart",
                },
                {
                    id:9,
                    name: 'johnny english',
                    genre: 'comedy',
                    rating: '8.1/10',
                    heart: "bi bi-heart",
                },
                    {
                        id:10,
                        name: 'dont look up',
                        genre: 'drama',
                        rating: '7/10',
                        heart: "bi bi-heart",
                    },
                    {
                        id:11,
                        name: 'american sniper',
                        genre: 'drama',
                        rating: '7.7/10',
                        heart: "bi bi-heart",
                    },
                    {
                        id:12,
                        name: 'catch me if you can',
                        genre: 'drama',
                        rating: '7.4/10',
                        heart: "bi bi-heart",
                    },
                    {
                        id:13,
                        name: 'the town',
                        genre: 'drama',
                        rating: '5.4/10',
                        heart: "bi bi-heart",
                    },
                    {
                        id:14,
                        name: 'the irishman',
                        genre: 'drama',
                        rating: '8/10',
                        heart: "bi bi-heart",
                    },
                        {
                            id:15,
                            name: 'spiderman',
                            genre: 'fantasy',
                            rating: '8/10',
                            heart: "bi bi-heart",
                        },
                        {
                            id:16,
                            name: 'batman',
                            genre: 'fantasy',
                            rating: '7.3/10',
                            heart: "bi bi-heart",
                        },
                        {
                            id:17,
                            name: 'justice leauge',
                            genre: 'fantasy',
                            rating: '6.7/10',
                            heart: "bi bi-heart",
                        },
                        {
                            id:18,
                            name: 'mowgly',
                            genre: 'fantasy',
                            rating: '5.2/10',
                            heart: "bi bi-heart",
                        },
                        {
                            id:19,
                            name: 'king kong',
                            genre: 'fantasy',
                            rating: '8.5/10',
                            heart: "bi bi-heart",
                        },
                            {
                                id:20,
                                name: 'dont listen',
                                genre: 'horror',
                                rating: '5.6/10',
                                heart: "bi bi-heart",
                            },
                            {
                                id:21,
                                name: 'escape room',
                                genre: 'horror',
                                rating: '4.2/10',
                                heart: "bi bi-heart",
                            },
                            {
                                id:22,
                                name: 'friday the 13',
                                genre: 'horror',
                                rating: '6.6/10',
                                heart: "bi bi-heart",
                            },
                            {
                                id:23,
                                name: 'annabelle',
                                genre: 'horror',
                                rating: '7.8/10',
                                heart: "bi bi-heart",
                            },
                            {
                                id:24,
                                name: 'smile',
                                genre: 'horror',
                                rating: '8.3/10',
                                heart: "bi bi-heart",
                            }]                  
    }

    render() {

        return (
            <div id="moviely" className="container text-center ">
                <div className="row border border-secondary">
                    <Header divid={this.divid}/>
                </div>
                <div className="row">
                    <div className="col-2 border border-secondary">
                        <Sider actioncounter={()=>this.actioncounter()} dramacounter={()=>this.dramacounter()} comedycounter={()=>this.comedycounter()} fantasycounter={()=>this.fantasycounter()} horrorcounter={()=>this.horrorcounter()}/>
                    </div>
                    <div className="col-10 border border-secondary">
                        <Main pageVaid={this.state.pageVaid} activePage={this.state.activePage} movies={this.state.movies} delmovie={(id)=>this.delmovie(id)} fullheart={(id)=>this.fullheart(id)} pushmovie={(e,values)=>this.pushmovie(e,values)} />
                    </div>
                </div>
                <div className="row border border-secondary">
                    <Footer divid={this.divid} activeChange={this.activeChange} newMovies={this.state.movies} pageVaid={this.state.pageVaid} activePage={this.activePage} />
                </div>
            </div>
        );    
    }
    divid=(e)=>{
        if (e.key == "Enter" && e.target.value>0){
            this.setState({pageVaid: e.target.value})
            this.state.activePage=1;
        }
    };
    activeChange=(num)=>{
        console.log(num);
        this.setState({activePage:num})
    };
    pushmovie=(e,values)=>{
        e.preventDefault();
        let newmovie={
        id:this.state.movies[this.state.movies.length-1].id+1,
        name:values.moviename,
        genre:values.genre,
        rating:values.rating+'/10',
        heart:"bi bi-heart"}
        this.state.movies.push(newmovie);
        this.setState({movies:this.state.movies})
    };
    delmovie=(id)=>{
        this.state.movies=this.state.movies.filter(movie => movie.id!=id);
        this.setState({movies:this.state.movies})
    };
    fullheart=(id)=>{
        this.state.movies.map( movie => {
                if(id === movie.id)
                    if(movie.heart=="bi bi-heart")
                        movie.heart="bi bi-suit-heart-fill"
                    else
                        movie.heart="bi bi-heart"
                this.setState(movie)
        } );
    };
actioncounter=()=>{
    let actioncounter=this.state.movies.filter(movie=>movie.genre=="action")
    return actioncounter.length;
};
dramacounter=()=>{
    let actioncounter=this.state.movies.filter(movie=>movie.genre=="drama")
    return actioncounter.length;
};
comedycounter=()=>{
    let actioncounter=this.state.movies.filter(movie=>movie.genre=="comedy")
    return actioncounter.length;
};
fantasycounter=()=>{
    let actioncounter=this.state.movies.filter(movie=>movie.genre=="fantasy")
    return actioncounter.length;
};
horrorcounter=()=>{
    let actioncounter=this.state.movies.filter(movie=>movie.genre=="horror")
    return actioncounter.length;
};
}

export default Moviely;
