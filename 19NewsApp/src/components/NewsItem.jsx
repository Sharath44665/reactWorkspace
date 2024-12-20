import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div className="card" style={{"width": "18rem"}}>
                    <img src="https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6b48/live/240e69b0-bd37-11ef-a2ca-e99d0c9a24e3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem