import Plx from "react-plx";
import g1 from '../../assets/galery1.png'
import g2 from '../../assets/galery2.png'
import g3 from '../../assets/galery3.jpg'
import g4 from '../../assets/galery4.jpg'
import g5 from '../../assets/galery5.png'
import g6 from '../../assets/galery6.jpg'
import '../../globalStyle/globalStyle.css'

const parallaxData = [
    {
      start: "self",
      end: 2200,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "rotate",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
        {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
      ],
    },
  ];
  const parallaxData2 = [
    {
      start: "self",
      end: 2200,
      properties: [
        {
          startValue: -100,
          endValue: 0,
          property: "rotate",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
        {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
      ],
    },
  ];
function Prlxgaleri (){
    return(
      <div className="wrp">
        <Plx className="prlx" parallaxData={parallaxData}>
                <img src={g1} alt="" />
        </Plx>
        <Plx className="prlx" parallaxData={parallaxData2}>
                <img src={g2} alt="" />
        </Plx>
        <Plx className="prlx" parallaxData={parallaxData}>
                <img src={g3} alt="" />
        </Plx>
        <Plx className="prlx" parallaxData={parallaxData2}>
                <img src={g4} alt="" />
        </Plx>
        <Plx className="prlx" parallaxData={parallaxData}>
                <img src={g5} alt="" />
        </Plx>
        <Plx className="prlx" parallaxData={parallaxData2}>
                <img src={g6} alt="" />
        </Plx>
      </div>
    )
}
 
export default Prlxgaleri;