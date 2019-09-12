/**
 * Filename: HomeCarousel.js
 * Author: gaboq98@gmail.com
 * Date: 11/9/2019
 * Description: Carousel component 
 */
import React from 'react';
import './styles.scss'
import {Carousel} from "react-bootstrap";

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: this.props.imgList,
      captionList: this.props.captionList,
    }
  }

  renderCarousel(imgList) {
    return(
      <Carousel>
      {imgList.map( (item, key) => (
          <Carousel.Item key={key}>
            <img
              className="img w-100"
              src={item}
              alt={key}
            />
            <Carousel.Caption>
              <h3>{this.state.captionList[key]}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  render() {
    return (
      <div className="homeCarousel">
        {this.renderCarousel(this.state.imgList)}
      </div>
    )
  }
}

export default HomeCarousel;