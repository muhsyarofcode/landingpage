import '../../globalStyle/globalStyle.css'
import Carousel from 'react-bootstrap/Carousel';
import unsplash1 from'../../assets/unsplash1.jpg'
import unsplash2 from'../../assets/unsplash2.jpg'
import unsplash3 from'../../assets/unsplash3.jpg'
import unsplash4 from'../../assets/unsplash4.jpg'
import unsplash5 from'../../assets/unsplash5.jpg'
import unsplash6 from'../../assets/unsplash6.jpg'

function Projects (){
    const slide1 = [
        {id:0,value:unsplash1,link:"/name_project_1"},
        {id:1,value:unsplash2,link:"/name_project_2"},
        {id:2,value:unsplash3,link:"/name_project_3"}
    ]
    const slide2 = [
        {id:0,value:unsplash4,link:"/name_project_4"},
        {id:1,value:unsplash5,link:"/name_project_5"},
        {id:2,value:unsplash6,link:"/name_project_6"}
    ]
    return (
        <div id='projects' className="projects">
            <div>
            <div className='wrap-cr'>
            <Carousel className='cr'>
            <Carousel.Item className='cri'>
                <div className='item'>
                    {slide1.map((data,id)=>
                    <a key={id} href={data.link} target='_blank' rel="noopener noreferrer">
                        <img key={id} src={data.value} className='kotak' alt='gambar'/>
                    </a>
                    )}
                </div>
            </Carousel.Item >
            <Carousel.Item className='cri'>
                <div className='item'>
                    {slide2.map((data,id)=>
                        <a key={id} href={data.link}>
                            <img key={id} src={data.value} className='kotak' alt='gambar'/>
                        </a>
                    )}
                </div>
            </Carousel.Item>
            </Carousel>
            </div>
            </div>
        </div>
    )
}

export default Projects;