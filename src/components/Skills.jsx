import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills() {
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center' style={{height:'100vh'}}>
            <h1 className='p-4 ms-5'><span className='text-warning'>My</span> Skills</h1>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h4>HTML</h4>
                    <span style={{fontSize:'28px',order:'1'}}>89%</span>
                </div>
                <ProgressBar variant="warning" now={80} />
    
                <div className='d-flex align-items-center justify-content-between mt-5'>
                    <h4>CSS</h4>
                    <span style={{fontSize:'28px',order:'1'}}>91%</span>
                </div>
                <ProgressBar variant="warning" now={91} />
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
            <div className='d-flex align-items-center justify-content-between'>
                    <h4>JS</h4>
                    <span style={{fontSize:'28px',order:'1'}}>85%</span>
                </div>
                <ProgressBar variant="warning" now={85} />
            <div className='d-flex align-items-center justify-content-between mt-5'>
                    <h4>REACT</h4>
                    <span style={{fontSize:'28px',order:'1'}}>50%</span>
                </div>
                <ProgressBar variant="warning" now={50} />
                
            </div>
            <div className='col-md-1'></div>
    
            <button className="btn btn-warning mt-5" style={{height:'60px',width:'300px',fontSize:'25px'}}>Download CV</button>
        </div>
    </div>
    
    </>
  )
}

export default Skills