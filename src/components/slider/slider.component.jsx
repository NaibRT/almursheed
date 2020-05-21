import React,{useEffect} from 'react'
import Swiper from 'swiper'
import './slider.component.scss'
import 'swiper/css/swiper.min.css'

function Slider(props) {
 useEffect(()=>{
  new Swiper('#swiper_most_popular_drivers .swiper_most_popular_drivers_bottom .swiper-container', {
   slidesPerView: 4,
   spaceBetween: 10,
   loop: true,
   loopFillGroupWithBlank: true,
   autoplay: {
     delay: 3000,
   },
   speed: 3000,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   breakpoints: {
     300: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     450: {
       slidesPerView: 2,
       spaceBetween: 20,
     },
     640: {
       slidesPerView: 3,
       spaceBetween: 20,
     },
     768: {
       slidesPerView: 4,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 4,
       spaceBetween: 20,
     }
   }
 });
 });

 return (
  <section id="swiper_most_popular_drivers">
        <div className="container">
            <div className="swiper_most_popular_drivers_top">
                <h6>{props.title}</h6>
                <a href="//http">{props.more}</a>
            </div>
            <div className="swiper_most_popular_drivers_bottom">
                <div className="swiper_most_popular_drivers_bottom_center">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                        {props.children}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 )
}

export default Slider
