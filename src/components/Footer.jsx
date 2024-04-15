import { faInstagram, faLinkedin, faGithub,faFacebook ,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
       <div className='row mt-5 mb-5'>
        <div className='col-md-4'></div>
        <div className='col-md-4 d-flex align-items-center justify-content-between'>
       <FontAwesomeIcon icon={faInstagram} size='2xl' className='icon'/>
       <FontAwesomeIcon icon={faLinkedin}  size='2xl' className='icon'/>
       <FontAwesomeIcon icon={faGithub}  size='2xl' className='icon'/>
       <FontAwesomeIcon icon={faFacebook} size='2xl' className='icon'/>
       <FontAwesomeIcon icon={faTwitter} size="2xl" className='icon'/>
        </div>
        <div className='col-md-4'></div>      
        </div> 
    </>
  )
}

export default Footer