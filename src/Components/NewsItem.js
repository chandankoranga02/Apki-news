import React, { Component } from 'react'

export default class NewsItem extends Component {
    
    constructor(){
      super();
    }


    render() {
        let { title , description , urlToImage , url, mode  } = this.props;
        return (

            <div className="card" style={mode === "light" ? {border : "none"} : {border : "none"}}>
                <img className="card-img-top" src={urlToImage} alt="Card image cap" />
                <div className="card-body"  style={ mode === "light" ? {color : "black", backgroundColor: "white"} : {color : "white", backgroundColor: "black"}}>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={url} target='_blank' className="btn btn-primary">Read More</a>
                </div>
            </div>

        )
    }
}
  