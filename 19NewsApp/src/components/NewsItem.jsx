
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, publishedAt, author, sourceNews, } = props;
    return (
        <div>

            <div className="card"   >
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: 0
                }}>
                    <span className=" badge rounded-pill text-bg-info" >
                        {sourceNews}

                    </span>

                </div>
                <div className="card-body">



                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description} </p>
                    <p className="blockquote-footer">{author} published at: {new Date(publishedAt).toGMTString().split(' ').slice(0, -2).join(' ')}</p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                </div>

            </div>
        </div>
    )
}

export default NewsItem