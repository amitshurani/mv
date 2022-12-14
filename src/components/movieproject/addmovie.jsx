import React, {component} from 'react';
import { useFormik } from "formik";

const Addmovie=(props)=>{
    const {pushmovie}=props

const formik=useFormik({
    initialValues:{
        moviename:'',
        genre:'',
        rating:''
    }
});

    return(
        <div className="m-5">
            <form onSubmit={(e)=>pushmovie(e,formik.values)}>
                <div> 
                    <label> Movie Name: </label>
                    <input type="text" className="form-control" name="moviename" id="moviename" placeholder="enter movie name" required autoFocus value={formik.values.moviename} onChange={formik.handleChange}/>
                </div>
                <br />
                <div> 
                    <label> Genre: </label>
                    <select className="form-control" name="genre" id="genre" placeholder="enter movie genre" required autoFocus value={formik.values.genre} onChange={formik.handleChange}>
                        <option defaultvalue="">choose genre...</option>
                        <option>action</option>
                        <option>comedy</option>
                        <option>drama</option>
                        <option>fantasy</option>
                        <option>horror</option>
                    </select>
                </div>
                <br />
                <div> 
                    <label> how much did you like this movie? (1-10) </label>
                    <input type="number" min="0" max="10" className="form-control" name="rating" id="rating" placeholder="enter movie rating" required autoFocus value={formik.values.rating} onChange={formik.handleChange}/>
                </div>
                <button type="submit" className="m-3 btn btn-secondary">
                    Send Movie
                </button>
            </form>
        </div>
    )
}
export default Addmovie;