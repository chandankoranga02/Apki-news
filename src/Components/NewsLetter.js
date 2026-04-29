import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class newsletter extends Component {

  static defaultProps = {
    category: 'business',
    pagesize: 6,
    country: 'us'
  };

  static propTypes = {
    category: PropTypes.string,
    pagesize: PropTypes.number,
    country: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0
    }
  }

  UpdateNews = async () => {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aab049df96574c2cb98bee727ba6443e&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    let data = await fetch(url);
    let FetchData = await data.json();

    this.setState({
      articles: Array.isArray(FetchData.articles) ? FetchData.articles : [],
      totalResults: FetchData.totalResults || 0,
      loading: false
    });
  }

  async componentDidMount() {
    await this.UpdateNews();
  }

  PreviousBTN = async () => {
    this.setState(
      { page: this.state.page - 1 },
      this.UpdateNews
    );
  }

  NextBTN = async () => {
    this.setState(
      { page: this.state.page + 1 },
      this.UpdateNews
    );
  }

  render() {
    return (
      <div>

        <div className='container my-4'>
          <h1
            className='my-5 d-flex justify-content-center'
            style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
          >
            {this.props.NewsCategory} - Top Headlines
          </h1>

          {this.state.loading &&
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }

          <div className='row'>
            {this.state.articles.map((element, index) => {
              return (
                <div key={element.url || index} className="col-sm-12 col-md-6 col-lg-4 my-2">
                  <NewsItem
                    mode={this.props.mode}
                    title={element.title ? element.title.slice(0, 67) : ""}
                    description={element.description ? element.description.slice(0, 68) : ""}
                    url={element.url}
                    urlToImage={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://home.treasury.gov/system/files/291/treasury-preview-1900x950.jpg"
                    }
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className='container my-2 d-flex justify-content-between'>
          <button
            hidden={this.state.page === 1}
            type="button"
            className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`}
            onClick={this.PreviousBTN}
          >
            &larr; Previous
          </button>

          <button
            hidden={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pagesize)}
            type="button"
            className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`}
            onClick={this.NextBTN}
          >
            Next &rarr;
          </button>
        </div>

      </div>
    )
  }
}