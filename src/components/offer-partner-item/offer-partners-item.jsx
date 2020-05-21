import React, {Component} from 'react';
import './offer-partner-item.style.scss';

function OfferPartnersItem(props){
    return(
  
        
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a href="offers_single.html">
                        <div className="swiper_our_offers_partners_bottom_item">
                          <img src={require(./img/rectangle1.jpg)} alt="" />
                          <div className="item_position_bottom">
                            <p className="swiper_our_offers_partners_name">{props.partnerName}</p>
                            <p>{props.regionName}</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="swiper-slide">
                    <a href="offers_single.html">
                      <div className="swiper_our_offers_partners_bottom_item">
                        <img src={require(./img/rectangle2.jpg)} alt="" />
                        <div className="item_position_bottom">
                          <p className="swiper_our_offers_partners_name">{props.partnerName}</p>
                          <p>{props.regionName}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                  <a href="offers_single.html">
                    <div className="swiper_our_offers_partners_bottom_item">
                      <img src={require(./img/rectangle3.jpg)} alt="" />
                      <div className="item_position_bottom">
                        <p className="swiper_our_offers_partners_name">{props.partnerName}</p>
                        <p>{props.regionName}</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                <a href="offers_single.html">
                  <div className="swiper_our_offers_partners_bottom_item">
                    <img src={require(./img/rectangle4.jpg)} alt="" />
                    <div className="item_position_bottom">
                      <p className="swiper_our_offers_partners_name">{props.partnerName}</p>
                      <p>{props.regionName}</p>
                    </div>
                  </div>
                </a>
              </div>
          </div>
          </div>        
        )
    }

export default OfferPartnersItem;