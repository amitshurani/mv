import React,{Component} from 'react';
class Counter extends Component {
    state={
        count:2,
        imgurl:"https://picsum.photos/250",
        names:['amit','shon','hodi','gal'],
    };
    style={
        fontSize:"15px",
        fontWeight:"bold",
    }
    render() { 
        let classes="btn btn-outline-primary m-2"
        let classes1="btn btn-outline-dark m-2"
        return <div>
            <div>
                <h1 className={this.changebg}>{this.formatcount}</h1>
            </div>
            <img src={this.state.imgurl}/>
            <p>{this.formatcount()}</p>
            <form>
                <input style={this.style} type="text"/>
                <label><button>+</button></label>
                <div>
                    <input className="btn btn-primary" type="reset" value="Reset"/>
                </div>
            </form>
            <div>
                <ul>
                    {this.state.names.map(name=>name.includes('a')?<button className={classes} key={name}>{name}</button>:<button className={classes1} key={name}>{name}</button>)}
                </ul>
            </div>
        </div>;
    }
    changebg() {
        let classes = "badge text-bg-danger m-2";
        classes += (this.state.count === 0) ? 'warning' : 'success';
        return classes;
    }

    formatcount(){
        return this.state.count===0?'zero':this.state.count;
    }
};
 
export default Counter;