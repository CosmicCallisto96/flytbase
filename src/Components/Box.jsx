import React, { Component } from 'react';
import './Box.scss';
class Box extends Component {
    state = {
        clicked:false,
        top:(this.props.v)*18,
        left:0,
        bottom:0,
        right:0
     }
    handleDelete=(id)=>{
        if(this.props.t)
        {
            this.props.action(id);
        }
    }
    handleSelect=()=>{
        if(this.props.t)
    {
        this.setState({clicked:!this.state.clicked})
    }
    }
    keyboardEvents = (event) =>{
        event.persist();
        console.log(event.key);
        // console.log(String.fromCharCode(event.keyCode));
    if(this.props.t)
    {
        if(event.key==='Delete')
        {
            this.handleDelete(this.props.v)
        }
        else if(event.key==='w' && (this.state.top<350))
        {
            this.setState({top:this.state.top+10})
            this.setState({bottom:this.state.bottom-10})
        }
        else if(event.key==='a' && (this.state.left)<=550)
        {
            this.setState({left:this.state.left+10})
            this.setState({right:this.state.right-10})
        }
        else if(event.key==='s' && (this.state.bottom<(this.props.v*10)))
        {
            this.setState({top:this.state.top-10})   
            this.setState({bottom:this.state.bottom+10})
        }
        else if(event.key==='d' && (this.state.right<=550))
        {
            
            this.setState({right:this.state.right+10})
            this.setState({left:this.state.left-10})
        }
    }
    }
    render() {
        console.log(this.state) 
        return (<div className={this.state.clicked?'top':'bottom'}  id={this.props.id} style={{marginRight:this.state.left,marginLeft:this.state.right,marginBottom:this.state.top,marginTop:this.state.bottom,zIndex:this.props.v}}>
            <button  className="bt"
            onClick={this.handleSelect} onKeyDown={this.keyboardEvents}>
             {this.props.v}
             </button>
         </div>
          );
    }
}

export default Box;