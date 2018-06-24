import React, { Component } from 'react';

class SideBar extends Component{
    render(){
        return (
            <div className="sidebar">
                <div className="widget">
                    <div className="widget-title">Künye</div>
                    <div className="widget-item"><span className="blue">{this.props.record.desc}</span></div>
                    <div className="widget-item">
                        <div className="info"><span>İsim</span><span>{this.props.record.name}</span></div>
                        <div className="info"><span>Yaş</span><span>{this.props.record.age}</span></div>
                        <div className="info"><span>Şehir</span><span>{this.props.record.city}</span></div>
                        <div className="info"><span>Medeni Durum</span><span>{this.props.record.merital}</span></div>
                        <div className="info"><span>Meslek</span><span>{this.props.record.job}</span></div>
                    </div>
                    <div className="widget-item"><span className="small-text">{this.props.record.keywork}</span></div>
                </div>
            </div>
        )
    }
}

export default SideBar;