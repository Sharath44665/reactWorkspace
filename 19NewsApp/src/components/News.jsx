import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor() {
    super();
    console.log("constructor- news component")
    this.state = {
      articles: [],
      loading: false
    }
  }

   async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b1e44374d9d34cbda3fa87df5a50f0fd"

    
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles : parsedData.articles  })
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top headlines</h2>
        <div className="row ">
          {
            this.state.articles.map( (element) => {
              return (<div className="col-md-4 my-3" key={element.url}>
                <NewsItem  title={element.title?element.title :""} description={element.description?element.description :""} imageUrl={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/636803022/photo/news-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=Gd0ekneVn1-NRgmk-gSHohLXUclMIfO4o2-lwxjg0qA="} newsUrl={element.url} />
              </div>);

            })
          }

        </div>



      </div>
    )
  }
}

export default News