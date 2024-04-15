import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <>
      <div className='container' style={{height:'100vh'}}>
        <div className='row' style={{marginTop:'80px'}}>
          <h1>Contact <span className='text-warning'>Me</span></h1>
          <div className='col-md-1'></div>
          <div className='col-md-4'>
            <div className='phone mt-5 d-flex align-items-center'>
            <FontAwesomeIcon icon={faPhone} size='xl'className='icon'/>
            <h4 className='ms-4'>8921592192</h4>
            </div>

            <div className='phone mt-5 d-flex align-items-center'>
            <FontAwesomeIcon icon={faEnvelope} size='xl' className='icon'/>
            <h4 className='ms-4'>anjanababum123@gmail.com</h4>
            </div>

            <div className='phone mt-5 d-flex align-items-center'>
            <FontAwesomeIcon icon={faLocationDot} size='xl' className='icon'/>
            <div className='ms-4'><h4>Anjanam Manattil</h4>
            <h4>Udayamperoor P.O</h4>
            <h4>Ernakulam, Kerala</h4></div>
            </div>

          </div>
          <div className='col-md-6 mt-5'>
          <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" 
         sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white' 
          }
        }}
        InputLabelProps={{
          style: {
            color: 'white' 
          }
        }}
        inputProps={{
          style: {
            color: 'white' 
          }
        }}  className='w-100'/>

<TextField id="outlined-basic" label="Enter Your Email" variant="outlined" 
         sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white' 
          }
        }}
        InputLabelProps={{
          style: {
            color: 'white' 
          }
        }}
        inputProps={{
          style: {
            color: 'white' 
          }
        }}  className='w-100 mt-5'/>
       <TextField
          id="outlined-multiline-static"
          label="Enter Your Message"
          multiline
          rows={4}
          defaultValue=""
          sx={{
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white' 
            }
          }}
          InputLabelProps={{
            style: {
              color: 'white' 
            }
          }}
          inputProps={{
            style: {
              color: 'white' 
            }
          }}
          className='w-100 mt-5'/>
          <button className='btn btn-warning mt-5' style={{height:'60px',width:'300px',fontSize:'25px'}}>Send Message</button>          
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    </>
  )
}

export default Contact