import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeSentence = (sentence) => {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  constructor(props) {
    super(props);
    // console.log("constructor- news component")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,

    }

    document.title = `${this.capitalizeSentence(this.props.category)} - News Today`
  }



  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=b1e44374d9d34cbda3fa87df5a50f0fd&page=${this.state.page}&pageSize=${this.props.pageSize}`

    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }) // setting state

  }

  async componentDidMount() {
    this.updateNews()
  }

  handlePrevious = async () => {



    this.setState({
      page: this.state.page -= 1,

    })
    this.updateNews()
  }

  handleNext = async () => {
    this.setState({
      page: this.state.page += 1
    })
    this.updateNews()

  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=b1e44374d9d34cbda3fa87df5a50f0fd&page=${this.state.page}&pageSize=${this.props.pageSize}`

    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    })
  };

  render() {
    return (

      <>

        {/* {this.state.loading && <Spinner />} */}
        <h2 className='text-center'>Top headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row ">
            {
              this.state.articles.map((element) => {
                return (<div className="col-md-4 my-3" key={element.publishedAt}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/636803022/photo/news-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=Gd0ekneVn1-NRgmk-gSHohLXUclMIfO4o2-lwxjg0qA="} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} sourceNews={element.source.name} />
                </div>);

              })


            }


          </div>
          </div>
        </InfiniteScroll>
        
      </>
    )
  }
}

export default News