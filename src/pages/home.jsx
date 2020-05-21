import React,{useContext} from 'react'
import MainSlider from '../components/main-slider/main-slider.component'
import Slider from '../components/slider/slider.component'
import PopularDriverItem from '../components/popular-driver-item/popular-drivers-item'
import PopularLocationItem from '../components/popular-location-item/popular-location-item'
import {homeContext} from '../contexts/homeContext'

function Home() {
 const context=useContext(homeContext)
 return (
  <>
  <MainSlider/>
  <Slider>
    {
     context.state.popularDrivers.map((x,index)=>{
       return <PopularDriverItem src={x.src} key={index} driverName={x.fullName} rating={x.ratingStar} ratingCount={x.ratingCount} car={x.carName} rides={x.rides}/>
     })
    }
  </Slider>
  <Slider>
     {
      context.state.mostVisitedPlace.map((x,index)=>{
       return <PopularLocationItem key={index} src={x.src} name={x.name} location={x.location}/>
      })
     }
  </Slider>
  </>
 )
}

export default Home
