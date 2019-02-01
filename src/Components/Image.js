
import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {

  // componentDidUpdate() {
  //   if(this.props.hovering) {
  //       let imgHeight = this.image.clientHeight
  //       this.overlay.style.height = imgHeight + 'px'
  //       this.text.style.lineHeight = imgHeight + 'px'
  //   }
  // }

  render() {
    // if (!/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
    return (
      <li style={this.props.styles}>
        {/* {this.props.hovering ?
        <div className="holder">
          <img ref={ el => {this.image = el}} src={this.props.photo_url} alt="" data-key={this.props.label}/>
          <div ref={ el => {this.overlay = el}}  className="overlay">
          <div ref={ el => {this.text = el}} className="overlayText">
            <a href={this.props.origin} className="wrapper">
              <svg data-author="https://www.flaticon.com/authors/dave-gandy" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 511.626 511.627">
                <g fill="#fff">
                  <path d="M392.857 292.354h-18.274c-2.669 0-4.859.855-6.563 2.573-1.718 1.708-2.573 3.897-2.573 6.563v91.361c0 12.563-4.47 23.315-13.415 32.262-8.945 8.945-19.701 13.414-32.264 13.414H82.224c-12.562 0-23.317-4.469-32.264-13.414-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.418 32.264-13.418h200.994c2.669 0 4.859-.859 6.57-2.57 1.711-1.713 2.566-3.9 2.566-6.567V82.221c0-2.662-.855-4.853-2.566-6.563-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648 0-42.016 8.042-58.102 24.125C8.042 113.297 0 132.665 0 155.313v237.542c0 22.647 8.042 42.018 24.123 58.095 16.086 16.084 35.454 24.13 58.102 24.13h237.543c22.647 0 42.017-8.046 58.101-24.13 16.085-16.077 24.127-35.447 24.127-58.095v-91.358c0-2.669-.856-4.859-2.574-6.57-1.713-1.718-3.903-2.573-6.565-2.573z"/>
                  <path d="M506.199 41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948 0-9.233 1.807-12.847 5.424-3.617 3.615-5.428 7.898-5.428 12.847s1.811 9.233 5.428 12.85l50.247 50.248-186.147 186.151c-1.906 1.903-2.856 4.093-2.856 6.563 0 2.479.953 4.668 2.856 6.571l32.548 32.544c1.903 1.903 4.093 2.852 6.567 2.852s4.665-.948 6.567-2.852l186.148-186.148 50.251 50.248c3.614 3.617 7.898 5.426 12.847 5.426s9.233-1.809 12.851-5.426c3.617-3.616 5.424-7.898 5.424-12.847V54.818c-.001-4.952-1.814-9.232-5.428-12.847z"/>
                </g>
              </svg>
              <p className="text">visit</p>
            </a>  
          </div>
          </div>
        </div> : */}

        <img onLoad={this.props.loader} data-key={this.props.label} src={this.props.photo_url} alt=""/>
      </li>
    )
    // } else {
    //   return (
    //     <li style={this.props.styles}>
    //       <a href={this.props.origin} className="wrapper">
    //         <img onLoad={this.props.loader} src={this.props.photo_url} alt=""/>
    //       </a>
    //     </li>
    //   )
    // }
  }
}

Image.propTypes = {
  photo_url: PropTypes.string.isRequired,
  // origin: PropTypes.string.isRequired,
  // hovering: PropTypes.bool.isRequired,
};

export default Image;