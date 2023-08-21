import {BsFillHeartFill}  from 'react-icons/bs'

function Footer () {
    return(
        <div className="bg-dark text-white text-center pb-2 pt-3">
            <p>Created with <BsFillHeartFill className='text-danger'/> by <a className="text-white fw-bold" href="https://www.instagram.com/muh.syarof/">MuhSyarof</a></p>
        </div>
    )
}

export default Footer;