import React from 'react';
import './NewsItem.css'

class NewsItem extends React.Component {
  constructor(props){
    super(props);

    this.imageRef = React.createRef();

    this.state = {spans:0};
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height/10) + 1;

    this.setState({spans})
  }

  render() {
    const { description, urlToImage, url, title } = this.props.article;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <a className="image" href={url}>
          <img
            ref={this.imageRef}
            alt={description}
            src={urlToImage}
          />
          <h2>
            <span>
              {title}
            </span>
          </h2>
        </a>
      </div>
    );
  }
}

export default NewsItem;