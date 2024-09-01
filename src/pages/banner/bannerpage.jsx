import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import FirstBanner from '../../assets/images/ban1.png';
import SecondBanner from '../../assets/images/ban2.png';
import ThirdBanner from '../../assets/images/ban3.png';
import FourthBanner from '../../assets/images/ban4.png';
import FifthBanner from '../../assets/images/ban5.png';
import { items } from './BannerData';




export const BannerPage =()=>{
  return <>
  <Carousel indicators={false}>
   {items.map((value,index)=>{
    return(
        <Carousel.Item>
        <img src={value.image} alt={value.title} />
    </Carousel.Item>
    );
})}
   
  </Carousel>

  </>

};


