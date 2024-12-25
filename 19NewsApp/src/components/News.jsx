import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';

export class News extends Component {
  capitalizeSentence = (sentence)  => {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  constructor(props) {
    super(props);
    // console.log("constructor- news component")
    this.state = {
      articles: [],
      loading: false,
      page: 1
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


    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {


    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=b1e44374d9d34cbda3fa87df5a50f0fd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

    //   this.setState({loading : true})


    //   let data = await fetch(url);
    //   let parsedData = await data.json()


    //   this.setState ({
    //     page: this.state.page += 1,
    //     articles : parsedData.articles,
    //     loading: false,

    //   })}

    this.setState({
      page: this.state.page += 1
    })
    this.updateNews()

  }
  render() {
    return (

      <div className='container my-3'>

        {this.state.loading && <Spinner />}
        <h2 className='text-center'>Top headlines</h2>
        <div className="row ">
          {
            !this.state.loading && this.state.articles.map((element) => {
              return (<div className="col-md-4 my-3" key={element.publishedAt}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/636803022/photo/news-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=Gd0ekneVn1-NRgmk-gSHohLXUclMIfO4o2-lwxjg0qA="} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} sourceNews={element.source.name} />
              </div>);

            })
          }

        </div>
        <div className="d-flex justify-content-between">

          <button type="button" disabled={this.state.page <= 1} className="btn btn-info" onClick={this.handlePrevious}> &laquo; Prev</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-info" onClick={this.handleNext}>next &raquo;</button>

        </div>

      </div>
    )
  }
}

export default News