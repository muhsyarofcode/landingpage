import {BsFillHeartFill}  from 'react-icons/bs'
import '../../globalStyle/globalStyle.css'

function Footer () {
    return(
        <div className="bg-dark text-white pb-2 pt-3">
            <div className='d-sm-flex justify-content-center pb-3'>
                <a className='linkFooter text-white m-1' href="/privacypolicy">Privacy Policy</a>
                <div className='VerticalLine2'></div>
                <a className='linkFooter text-white m-1' href="/term&condition">Term & Condition</a>
                <div className='VerticalLine2'></div>
                <a className='linkFooter text-white m-1' href="/disclaimer">Disclaimer</a>
                <div className='VerticalLine2'></div>
                <p className='text-white m-1' >Copyright &copy; 2023 MSH </p>
            </div>
            <div>
            <p className='text-center mt-3'>Created with <BsFillHeartFill className='text-danger'/> by <a className="text-white fw-bold" href="https://www.instagram.com/muhsyarof">MuhSyarof</a></p>
            </div>
        </div>
    )
}

export default Footer;