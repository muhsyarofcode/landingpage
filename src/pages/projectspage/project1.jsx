import Navigasibar from '../../components/NavbarProjects/NavbarProjects';
import Footer from '../../components/footer/footer'
import undercontructions from '../../assets/underconteructions.png'
import '../../globalStyle/globalStyle.css'

function P1 (){
    return(
        <div className='wraper-project'>
            <Navigasibar/>
            <div className='container-project'>
                <div className='undercontructions'>
                    <h1 className='text-warning'>Website Under Construction</h1>
                    <img className='imgUndercontructions' src={undercontructions} alt="bg" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default P1;