import React from 'react'
import Typewriter from 'typewriter-effect';

function Home() {

  return (
    <>
    <div className='row p-3' style={{height:'100vh'}}>
        <div className='col-md-1'></div>
        <div className='col-md-6 d-flex'>
            
                    <div className='mt-5'>
                        <h2>Hi,I'm a Frontend Web</h2>
                        {/* <span className='mt-3' style={{color:'yellow',fontSize:'50px', fontWeight:'bold'}}>DEVELOPER</span> */}
                       <div className='typewriter'>
                            <Typewriter                            
                            options={{
                            strings: ['DEVELOPER', 'ANJANA M BABU'],
                            autoStart: true,
                            loop: true,
                            }}
                            
                            />
                       </div>
                       <div className='mt-5 textJust'>
                       <p style={{fontSize:'27px'}} >I'm a front-end developer passionate about crafting beautiful and intuitive web experiences. With expertise in HTML, CSS, and JavaScript, I specialize in turning ideas into polished and user-friendly websites. Let's build something amazing together!.</p>
                       </div>
                    </div>
        </div>
        <div className='col-md-4'>   
          <div> <img src="./src/assets/download__9.png" alt="" className='w-100 h-100'/> </div>
        </div>   
        <div className='col-md-1'></div>
    </div>
    </>
  )
}

export default Home