import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalizeSentence(props.category)} - News Today`

  const capitalizeSentence = (sentence) => {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    props.setProgress(10)

    setLoading(true)

    let data = await fetch(url);
    props.setProgress(50)

    let parsedData = await data.json()
    props.setProgress(80)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)

  }

  useEffect(() => {
    updateNews()
  }, [])



  const handlePrevious = async () => {
    setPage(page - 1)
    updateNews()
  }

  const handleNext = async () => {
    setPage(page + 1)
    updateNews()

  }

  const fetchMoreData = async () => {
    setPage(page + 1)

    const url = `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`


    setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)

  };


  return (

    <>

      {loading && <Spinner />}
      <h2 className='text-center' style={{ marginTop: '67px' }}>Top headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row ">
            {
              articles.map((element) => {
                return (<div className="col-md-4 my-3" key={element.url}>
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



export default News