import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl, publishedAt, author, sourceNews} = this.props;
        return (
            <div>
                <div className="card"   >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning" style={{left: '90% !important'}}>
    {sourceNews}
    
  </span>
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description} </p>
                        <p className="blockquote-footer">{author} published at: {new Date(publishedAt).toGMTString().split(' ').slice(0,-2).join(' ')}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default NewsItem