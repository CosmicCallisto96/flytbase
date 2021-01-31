import React, { Component } from 'react';
import './Main.scss';
import Box from '../Components/Box';

class Main extends Component {
    state = {
        count:1,
        box:[
            {
            id:1
            }
        ],
        isToggle:false
    }
    handleToggle=()=>{
        this.setState({isToggle:!this.state.isToggle})
    }
    handleBox=()=>{
        this.setState({box:[...this.state.box,{id:this.state.count+1}]})
        this.setState({count:this.state.count+1})
    }
    render() { 
        console.log(this.state)
        return (<div className="main">
            <div className="t">
            <div className="left"><button onClick={this.handleBox}>Add Box</button></div>
            <div className="right">
                <button onClick={this.handleToggle} value={this.state.isToggle} className={this.state.isToggle?'on':'off'}>{this.state.isToggle?'ON':"OFF"}</button>
                
                </div>
            </div>
            <div className='arena'>
                {this.state.box.map(val=><Box key={val.id} v={val.id} t={this.state.isToggle}></Box>)}
           
            </div>
           
        </div> );
    }
}
 
export default Main;