/**
 * Filename: CustomCarousel.js
 * Author: gaboq98@gmail.com
 * Date: 31/8/2019
 * Description: Carousel component 
 */
import React from 'react';
import './styles.scss'
import { Carousel} from "react-bootstrap";

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: this.props.imgList,
    }
  }

  renderCarousel(imgList) {
    return(
      <Carousel>
      {imgList.map( (item, key) => (
          <Carousel.Item key={key}>
            <img
              className="img d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  render() {
    return (
      <div className="customCarousel">
        {this.renderCarousel(this.state.imgList)}
      </div>
    )
  }
}

export default CustomCarousel;