import React from 'react';
import './popular-location-item.style.scss';

function PopularLocationItem(props){
            return(

                    <div className="swiper-slide">
                      <a href="attractive_single.html">
                        <div className="popular_attractions_locations_bottom_item pb-4">
                          <img src={require(`../../images/${props.src}`)} alt="" />
                          <p className="popular_attractions_locations_name">{props.name}</p>
                          <p>{props.location}</p>
                        </div>
                      </a>
                    </div>

        )
    }

export default PopularLocationItem;