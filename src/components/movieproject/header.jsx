import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar row">
                    <div className="container-fluid col">
                    <Link style={{color:'black'}} to="/"><h1 className="h1">Moviely</h1></Link>
                    </div>
                    <div className="col">
                    <Link to="/addmovie"><span className="btn btn-outline-secondary ">Add Movie</span></Link>
                    </div>
                    <div className="col">
                        <span>
                            <div className="input-group flex-nowrap">
                                <input type="number" placeholder="Items In Page" onKeyPress={(e)=>this.props.divid(e)}/>
                            </div>
                        </span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
