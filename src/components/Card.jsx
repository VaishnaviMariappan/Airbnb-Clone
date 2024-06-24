import React from 'react'
import './Card.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Navigation } from 'swiper/modules';



function Card({card}) {
  return (
    <div className='card-box'>
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop={false}
            mousewheel={true}
            cssMode={true}
            pagination
            // navigation={true}
            modules={[Pagination,Navigation]}
            className='swiper-container'
            >
                {card.imgSrc.map((src,i)=>(

                <SwiperSlide key={i}>
                    <img 
                    src={src}
                    className='card-img'/>
                </SwiperSlide>
                ))}

               
            </Swiper>
        <div className='card-info-flex'>
            <h3 className='card-title'>{card.desc}</h3>
            <div className='card-rating'>
                <StarBorderIcon/>
                <p>{card.rating}</p>
            </div>
        </div>
         <p className='card-details'>{card.dist}</p>
        <p className='card-details'>{card.date}</p>
        <p className='card-details2'>
            <span style={{fontWeight: "600"}}>{card.price} </span>&nbsp; Night</p>
    </div>

    
    
  )
}

export default Card
