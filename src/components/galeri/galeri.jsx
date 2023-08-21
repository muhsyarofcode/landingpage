import '../../globalStyle/globalStyle.css'
import Plx from "react-plx";
import Prlxgaleri from '../parallaxgaleri/prlxgaleri';

function Galeri (){

    const parallaxtext = [
        {
          start: 1000,
          end: 2200,
          properties: [
            {
              startValue: 1000,
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

    return(
        <div className='wraper-galeri'>
            <Plx className='text-galery' parallaxData={parallaxtext}>
                <h1>This is galery</h1>
            </Plx>
            <Prlxgaleri/>
        </div>
    )
}

export default Galeri;