import React,{useEffect,useContext} from 'react'
import Swiper from 'swiper'
import './main-slider.component.scss'
import MainSliderItem from '../main-slider-item/main-slider-item.component'
import {homeContext} from '../../contexts/homeContext'
import 'swiper/css/swiper.min.css'

function MainSlider(props) {
 
  useEffect(() => {
    new Swiper('#swiper .swiper-container', {
      autoplay: {
        delay: 3000,
      },
      speed: 3000,
      effect: 'fade',
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     });
  })

  const st=useContext(homeContext);
 return (
  <section id="swiper">
   <div className="swiper-container">
      <div className="swiper-wrapper">
        {
             st.state.mainSlider.map((x,index)=>{
               return <MainSliderItem key={index} imgLink={require(`../../images/${x.src}`)} title={x.title}/>
             })
        }
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
</section>
 )
}
export default MainSlider
