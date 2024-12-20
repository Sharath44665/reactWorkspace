import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top headlines</h2>
        <div className="row ">
            <div className="col-md-4 my-3">
            <NewsItem title="demo title" description="this is a demo descrption" />
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="demo title" description="this is a demo descrption" />
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="demo title" description="this is a demo descrption" />
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="demo title" description="this is a demo descrption" />
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="demo title" description="this is a demo descrption" />
            </div>

            

        </div>
        
    

      </div>
    )
  }
}

export default News