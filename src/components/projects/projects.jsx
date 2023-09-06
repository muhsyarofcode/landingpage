import '../../globalStyle/globalStyle.css'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import './style.css'
import { motion } from "framer-motion"
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

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };
      
    return (
        <div id='projects' className="projects">
            <div className='motionSvg'>
            <motion.svg
      width="400"
      height="400"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#ff0055"
        variants={draw}
        custom={1.5}
      />
      <motion.circle
        cx="100"
        cy="300"
        r="80"
        stroke="#0099ff"
        variants={draw}
        custom={2}
      /> 
      <motion.circle
        cx="100"
        cy="500"
        r="80"
        stroke="#00cc88"
        variants={draw}
        custom={3}
      />
        <motion.circle
        cx="300"
        cy="90"
        r="80"
        stroke="#ece255"
        variants={draw}
        custom={1}
      />
              <motion.circle
        cx="300"
        cy="510"
        r="80"
        stroke="#ece255"
        variants={draw}
        custom={1}
      />
      <motion.circle
        cx="500"
        cy="100"
        r="80"
        stroke="#00cc88"
        variants={draw}
        custom={3}
      />
      <motion.circle
        cx="500"
        cy="300"
        r="80"
        stroke="#0099ff"
        variants={draw}
        custom={2.5}
      />
      <motion.circle
        cx="500"
        cy="500"
        r="80"
        stroke="#ff0055"
        variants={draw}
        custom={1.5}
      />
      
      
     
    </motion.svg>
            </div>
            <div className='motion'>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -1, right: 1100, bottom: 1, top: -500 }}
                drag
                className='motionDiv1 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>D</h1></motion.div>
                <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -170, right: 970, bottom: 1, top: -500 }}
                drag
                className='motionDiv2 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>R</h1></motion.div>
                <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -330, right: 800, bottom: 1, top: -500 }}
                drag
                className='motionDiv3 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>A</h1></motion.div>
                <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -490, right: 690, bottom: 1, top: -500 }}
                drag
                className='motionDiv4 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>G</h1></motion.div>
                            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -630, right: 480, bottom: 1, top: -500 }}
                drag
                className='motionDiv5 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>A</h1></motion.div>
                            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -820, right: 290, bottom: 1, top: -500 }}
                drag
                className='motionDiv6 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>B</h1></motion.div>
                            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -970, right: 150, bottom: 1, top: -500 }}
                drag
                className='motionDiv7 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>L</h1></motion.div>
                            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                dragConstraints={{ left: -1150, right: 1, bottom: 1, top: -500 }}
                drag
                className='motionDiv8 d-flex justify-content-center align-items-center'
                ><h1 className='text-dark'>E</h1></motion.div>
            </div>
            
            <div>
            <div className='wrap-cr'>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {slide1.map((data,id)=>
                    <div className='d-flex'>
                    <SwiperSlide >
                        <h1 className='titleProject position-absolute text-warning'>{data.name}</h1>
                        <a key={id} href={data.link} target='_blank' rel="noopener noreferrer">
                        <img key={id} src={data.value} className='kotak' alt='gambar'/>
                        </a>
                    </SwiperSlide>
                    </div>
                )}
            </Swiper>
            </div>
            </div>
        </div>
    )
}

export default Projects;