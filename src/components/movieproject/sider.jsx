import { Link } from "react-router-dom";


const Sider=(props)=> {
    const {actioncounter,dramacounter,comedycounter,fantasycounter,horrorcounter}=props
        return (
            <div>
                <div className="h6 mt-5 mb-5">
                    <h5>Hay! Choose Your Genre</h5>
                </div>
                <div className="mt-3">
                    <Link to="/action"><button type="button" className="btn btn-secondary position-relative" id="button">
                    Action <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{actioncounter()}</span>
                    </button></Link>                
                </div>
                <div className="mt-3">   
                    <Link to="/comedy"><button type="button" className="btn btn-secondary position-relative" id="button">
                    Comedy <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{comedycounter()}</span>
                    </button></Link> 
                </div>
                <div className="mt-3"> 
                    <Link to="/drama"><button type="button" className="btn btn-secondary position-relative" id="button">
                    Drama <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{dramacounter()}</span>
                    </button></Link> 
                </div> 
                <div className="mt-3">    
                    <Link to="/horror"><button type="button" className="btn btn-secondary position-relative" id="button">
                    Horror <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{fantasycounter()}</span>
                    </button></Link> 
                </div>
                <div className="mt-3 mb-3">
                    <Link to="/fantasy"><button type="button" className="btn btn-secondary position-relative" id="button">
                    Fantasy <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{horrorcounter()}</span>
                    </button></Link>
                </div>
            </div>
        );
    }

export default Sider;
