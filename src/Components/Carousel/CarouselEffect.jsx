import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css'

const CarouselEffect = () => {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        
        
        >
            {
                img?.map((imageLink)=>{
                   return <img key ={imageLink} src={imageLink}/>
                })
            }


        </Carousel>
        <div className={classes.hero_img}></div>

    </div>
  )
}

export default CarouselEffect;