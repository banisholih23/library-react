import React, {Component} from 'react'

import cover from '../assets/covernya.png'
import coverdilan from '../assets/covernyadilan.png'

class Details extends Component{
  render(){
    return(
      <>
        <div class="details">
          <div class="cover-up">  
            <img src={cover} alt="cover-up" />
          </div>
          <div class="full-cover">
            <img src={coverdilan} alt="full-cover" />
          </div>
          <div class="book-details">
            <div class="tag">
              <div class="text">Novel</div>
            </div>
            <div class="info">
              <div class="title">Dilan 1990</div>
              <div class="status">Available</div>
            </div>
            <div class="date">30 Juni 2019</div>
            <div class="desc">
              <div class="text">
                Lorem ipsum dolar sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar. Proin sit amet accumsan lectus. Nullam auctor auctor consequat. Donec semper magna erat, sed fringilla lacus pretium eget. Cras porttitor, nibh sit amet interdum bibendum, nibh velit accumsan tellus, vel vehicula tellus leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper efficitur. Pellentesque in euismod purus, sit amet ultrices tortor. Vestibulum ante dui, tempor at dui id, tincidunt euismod diam. Integer pellentesque massa nibh, ac eleifend odio malesuada sed. Phasellus orci sem, cursus nec orci ut, accumsan facilisis lacus. Nullam at elementum nibh, ac gravida felis. In sagittis rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae lobortis. Cras posuere ligula vel enim suscipit malesuada. Vivamus non nulla ut ante imperdiet euismod quis nec massa.
              </div>
              <div class="borrow">
                <button>Borrow</button>
              </div>
            </div>
          </div>
        </div>  
      </>
    )
  }
}

export default Details