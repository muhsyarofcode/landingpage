import style from '../../globalStyle/globalStyle.module.css'
import DragdropFiles from '../dragdrop/dragdrop';
import Plx from "react-plx";
import { useInView } from 'react-intersection-observer';

function Service (){
  const { ref:textserviceRef, inView:textserviceIsVisible } = useInView();
    const parallaxservice = [
        {
          start: 1000,
          end: 1600,
          properties: [
            {
                startValue: -1000,
                endValue: 0,
                property: "translateX",
              },
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
          ],
        },
      ];
    return (

            <div id='service' className={style.service}>
                <Plx className={style.parallaxservice} parallaxData={parallaxservice}>
                    <DragdropFiles/>
                </Plx>
                <div className={style.textservice}> 
                  <p  className={`${textserviceIsVisible ? style.textmove : style.textNotMove}`}> how did you solve the problem? You just need to upload and submit on the side. We will process it quickly and correctly. after that, wait for the results, and we will send it via the email that you have filled in.</p>
                  <br />
                  <p   className={`${textserviceIsVisible ? style.textmove : style.textNotMove}`}> If your problem is too complicated, we will contact you to discuss it. We accept all problems from personal to business.</p>
                  <br />
                  <p  ref={textserviceRef} className={`${textserviceIsVisible ? style.textmove : style.textNotMove}`}> How to fill out the form on the side is first select a file that contains or explains your problem can be in the form of writing, images, or videos. fill in the data form so that we can contact you. after that do not close the page because the data is being uploaded, thank you.</p>
                </div>
            </div>
           
    )
}

export default Service;