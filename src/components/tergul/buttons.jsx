import React, {Component} from "react";
class Buttons extends Component {
   
    state = { 
        arr:['amit','hila','hodi','gal'],
        a: '',
        count:0,
        withstyle:true,
        type:'button'
     } 
    render() { 
        return (
            <div>
                <input type="text" onKeyPress={(e)=> this.addbt(e)} id="tv"/>
                <input type="checkbox" checked={this.state.withstyle} onChange={this.changestyle} className="m-1"/>
                <label>Aplly filtering</label>
                <select className="m-2" onChange={(en)=>this.changetype(en)}>
                    <option value="button"> button</option>
                    <option value="h1">h1</option>
                    <option value="img">image</option>
                </select>
                <br />
                {this.state.arr.map(name=> this.generateelement(name))}
            </div>
        );
    }
    generateelement=(name)=>{
        switch(this.state.type){
            case 'button':
                return<button key={this.state.arr.indexOf(name)} className={this.state.withstyle?this.getclasses(name):''} >
                {name}
                </button>;
            case 'h1':    
                return<h1 key={name} >
                {name}
                </h1>;
            case 'img':
                return<img src="sdfg" alt={name}>
                </img>;  
        }
    }
    changetype=(en)=>{
        this.state.type=en.target.value;
        this.setState({type:this.state.type})
    }
    changestyle=()=>{
        this.state.withstyle= !this.state.withstyle;
        this.setState({withstyle:this.state.withstyle})
    };    
    getclasses(name){
        return "btn m-2 btn-outline-" +((name.includes('a'))?'primary':'dark')
    };
    addbt(e){
        if (e.key=='Enter'){
        this.state.arr.push(e.target.value)
        this.setState( {arr: this.state.arr} )
    }
    };
}    
 
export default Buttons;