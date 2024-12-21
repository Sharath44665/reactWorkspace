import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": "news24",
    "name": "News24"
    },
    "author": "Lloyd Burnard",
    "title": "A day to remember: Teenage sensation Kwena Maphaka's emotional rollercoaster in Newlands debut",
    "description": "Kwena Maphaka's rollercoaster ODI debut at Newlands saw him experience a wide range of emotions and the highs and lows of international cricket, writes Lloyd Burnard.",
    "url": "https://www.news24.com/sport/cricket/proteas/a-day-to-remember-teenage-sensation-kwena-maphakas-emotional-rollercoaster-in-newlands-debut-20241220",
    "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/12550/f1afedbdc243447dbd1ea82a567b9718.jpg",
    "publishedAt": "2024-12-20T10:15:24",
    "content": "Kwena Maphaka's rollercoaster ODI debut at Newlands saw him experience a wide range of emotions and the highs and lows of international cricket, writes Lloyd Burnard."
    },
    {
    "source": {
    "id": "news-com-au",
    "name": "News.com.au"
    },
    "author": null,
    "title": "Cricket world erupts over brutal axing",
    "description": "Nathan McSweeney was officially dropped from the Australian Test squad on Friday in a move that has sparked fierce backlash among cricket fans.",
    "url": "https://www.news.com.au/sport/cricket/fed-up-cricket-world-erupts-over-nathan-mcsweeney-axing/news-story/3e7b080f0b37b21c560c156805581140",
    "urlToImage": "https://content.api.news/v3/images/bin/2678a3632483d57253f3023aed89d837",
    "publishedAt": "2024-12-20T05:53:00Z",
    "content": "Nathan McSweeney was officially dropped from the Australian Test squad on Friday in a move that has sparked fierce backlash among cricket fans. The Aussies unveiled a 15-man squad for the final two … [+3741 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
    ]
  constructor() {
    super();
    console.log("constructor- news component")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

   async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b1e44374d9d34cbda3fa87df5a50f0fd"

    
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData)
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
                <NewsItem  title={element.title?element.title.slice(0,33):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/636803022/photo/news-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=Gd0ekneVn1-NRgmk-gSHohLXUclMIfO4o2-lwxjg0qA="} newsUrl={element.url} />
              </div>);

            })
          }

        </div>



      </div>
    )
  }
}

export default News