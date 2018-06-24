import React, { Component } from 'react';

class Header extends Component{


    update(){
        this.props.updateFunc("2123");
    }


    render(){
        return (
        <div className="header" onClick={this.update}>
            <div className="image"></div>
            <div className="title">" {this.props.title} "</div>
        </div>)
    }
}

export default Header;