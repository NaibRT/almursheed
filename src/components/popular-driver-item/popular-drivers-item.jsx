import React from 'react';
import './popular-drivers-item.style.scss';

function PopularDriversItem(props){
        
            return(
                        <div className="swiper-slide">
                          <a href="driver_details.html">
                            <div className="most_popular_drivers_bottom_item">
                              <img className="driver-img" src={require(`../../images/rectangle1.jpg`)} alt="" />
                              <p className="most_popular_drivers_name">{props.driverName}</p>
                              <div className="most_popular_drivers_bottom_item_ratings">
                                <img src={require('../../images/star-copy.svg')} alt="" />
                                <p>{props.rating}</p>
                                <span>{props.ratingCount}</span>
                              </div>
                              <p>{props.car}</p>
                              <div className="most_popular_drivers_bottom_item_rides">
                                <p>{props.rides}</p>
                              </div>
                            </div>
                          </a>
                        </div>
)
}
export default PopularDriversItem;