import '../../globalStyle/globalStyle.css'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import './style.css'
import unsplash1 from'../../assets/unsplash1.jpg'
import unsplash2 from'../../assets/unsplash2.jpg'
import unsplash3 from'../../assets/unsplash3.jpg'
import unsplash4 from'../../assets/unsplash4.jpg'
import unsplash5 from'../../assets/unsplash5.jpg'
import unsplash6 from'../../assets/unsplash6.jpg'

function Projects (){
    const slide1 = [
        {id:0,value:unsplash1,link:"/name_project_1",name:"Project 1"},
        {id:1,value:unsplash2,link:"/name_project_2",name:"Project 2"},
        {id:2,value:unsplash3,link:"/name_project_3",name:"Project 3"},
        {id:3,value:unsplash4,link:"/name_project_4",name:"Project 4"},
        {id:4,value:unsplash5,link:"/name_project_5",name:"Project 5"},
        {id:5,value:unsplash6,link:"/name_project_6",name:"Project 6"}
    ]

    return (
        <div id='projects' className="projects">
            <div>
            <div className='wrap-cr'>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {slide1.map((data,id)=>
                    <SwiperSlide >
                        <h1 className='titleProject position-absolute text-warning'>{data.name}</h1>
                        <a key={id} href={data.link} target='_blank' rel="noopener noreferrer">
                        <img key={id} src={data.value} className='kotak' alt='gambar'/>
                        </a>
                    </SwiperSlide>
                )}
            </Swiper>
            </div>
            </div>
        </div>
    )
}

export default Projects;