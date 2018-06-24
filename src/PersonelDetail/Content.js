import React, { Component } from 'react';

class Content extends Component{
    render(){

        const items = this.props.contents.map((elem, i) => {
            let content_id = 'content_'+i;
            const in_items = elem.values.map((value, x) => {
                let item_id = 'item_'+x;
                return(
                    <div className="content-item" id={item_id} data-id={item_id}>{value}</div>
                )
            });
            return(
                <div className="content-wrapper" id={content_id} data-id={content_id}>
                    <h4 className="content-title">{elem.title}</h4>
                    <div className="content-items">{in_items}</div>
                </div>
            )
        });


        return (
            <div className="content">{items}</div>
        )
    }
}

export default Content;