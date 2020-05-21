import React from 'react'
import './main-slider.item.component.scss'

function MainSliderItem(props) {
 return (
  <div className="swiper-slide">
  <a href="https://google.az">
  <img src={props.imgLink} alt=""/>
      <div className="swiper-bottom-text">
          <p>{props.title}</p>
      </div>
  </a>
</div>
 )
}

export default MainSliderItem
