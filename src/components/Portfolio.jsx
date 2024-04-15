import React from 'react'
import Card from 'react-bootstrap/Card'; 

function Portfolio() {
  return (
    <>
        <div className='container'>
            <h1 className='p-4 ms-5'>Portfolio</h1>
            <h3 className='ps-4 ms-5'>Some of my recent Projects</h3>
        
            <div className='row' style={{marginTop:'60px'}}>
            <div className='col-md-4'>
                <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src="https://static01.nyt.com/images/2023/06/19/travel/19walking-gear-top/19walking-gear-top-superJumbo.jpg" style={{height:'320px'}} className='w-100' />
                        <Card.Body>
                            <Card.Title>TrekTribe</Card.Title>
                            <Card.Text>
                                A travel website                            
                            </Card.Text>
                         </Card.Body>
                    </Card>
            </div>
                <div className='col-md-4'>
                    <Card style={{ width: '350px',marginLeft:'50px' }}>
                        <Card.Img variant="top" src="https://png.pngtree.com/element_our/png/20180930/calculator-icon-design-vector-png_119229.jpg" style={{height:'320px'}} className=''/>
                        <Card.Body>
                            <Card.Title>Calculator</Card.Title>
                            <Card.Text>
                                A Calculator using HTML, CSS and JavaScript
                            </Card.Text>
                         </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card style={{ width: '350px',marginLeft:'50px' }}>
                        <Card.Img variant="top" src="https://www.boostability.com/content/wp-content/uploads/sites/2/2016/05/July-21st-Target-Country-e1626470100786.jpg" style={{height:'320px'}}/>
                        <Card.Body>
                            <Card.Title>Country Search Website</Card.Title>
                            <Card.Text>
                                A website to search country and displays
                            </Card.Text>
                         </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row' style={{marginTop:'60px'}}>
                <div className='col-md-4'>
                <Card style={{ width: '350px' }}>
                    <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/028/116/820/original/magnifying-glass-weather-report-icon-symbols-search-discovery-cloud-research-analysis-concept-3d-isolated-illustration-design-cartoon-pastel-minimal-style-for-design-ux-ui-print-ad-vector.jpg" style={{height:'320px'}} className='w-100' />
                    <Card.Body>
                        <Card.Title>City Weather Search</Card.Title>
                        <Card.Text>
                            A travel website                            
                        </Card.Text>
                     </Card.Body>
                </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '350px',marginLeft:'50px' }}>
                    <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/free-emi-calculator-1795341-1522704.png" style={{height:'320px'}} className=''/>
                    <Card.Body>
                        <Card.Title>Simple Interest Calculator</Card.Title>
                        <Card.Text>
                            A Calculator using HTML, CSS and JavaScript
                        </Card.Text>
                     </Card.Body>
                </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '350px',marginLeft:'50px' }}>
                    <Card.Img variant="top" src="https://play-lh.googleusercontent.com/SsmmlKoGqOhWqlJRomR9vCIUhNzA5S8prBlwV1ngRgjxTcrn_A6bhbyXVFmn9-p7sfQ" style={{height:'320px'}}/>
                    <Card.Body>
                        <Card.Title>Body Mass Index Calculator</Card.Title>
                        <Card.Text>
                            A website to search country and displays
                        </Card.Text>
                     </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio

/*<div className='mt-5 d-flex justify-content-between'>
                <Card style={{ width: '350px' }}>
                    <Card.Img variant="top" src="https://static01.nyt.com/images/2023/06/19/travel/19walking-gear-top/19walking-gear-top-superJumbo.jpg" style={{height:'320px'}} className='w-100' />
                    <Card.Body>
                        <Card.Title>TrekTribe</Card.Title>
                        <Card.Text>
                            A travel website                            
                        </Card.Text>
                     </Card.Body>
                </Card>
                <Card style={{ width: '350px',marginLeft:'50px' }}>
                    <Card.Img variant="top" src="https://png.pngtree.com/element_our/png/20180930/calculator-icon-design-vector-png_119229.jpg" style={{height:'320px'}} className=''/>
                    <Card.Body>
                        <Card.Title>Calculator</Card.Title>
                        <Card.Text>
                            A Calculator using HTML, CSS and JavaScript
                        </Card.Text>
                     </Card.Body>
                </Card>
                <Card style={{ width: '350px',marginLeft:'50px' }}>
                    <Card.Img variant="top" src="https://www.boostability.com/content/wp-content/uploads/sites/2/2016/05/July-21st-Target-Country-e1626470100786.jpg" style={{height:'320px'}}/>
                    <Card.Body>
                        <Card.Title>Country Search Website</Card.Title>
                        <Card.Text>
                            A website to search country and displays its details
                        </Card.Text>
                     </Card.Body>
                </Card>
            </div>
            <div className='mt-5 d-flex justify-content-between'>
                <Card style={{ width: '350px' }}>
                    <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/028/116/820/original/magnifying-glass-weather-report-icon-symbols-search-discovery-cloud-research-analysis-concept-3d-isolated-illustration-design-cartoon-pastel-minimal-style-for-design-ux-ui-print-ad-vector.jpg" style={{height:'320px'}} className='w-100' />
                    <Card.Body>
                        <Card.Title>City Weather Search</Card.Title>
                        <Card.Text>
                            A travel website                            
                        </Card.Text>
                     </Card.Body>
                </Card>
                <Card style={{ width: '350px',marginLeft:'50px' }}>
                    <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/free-emi-calculator-1795341-1522704.png" style={{height:'320px'}} className=''/>
                    <Card.Body>
                        <Card.Title>Simple Interest Calculator</Card.Title>
                        <Card.Text>
                            A Calculator using HTML, CSS and JavaScript
                        </Card.Text>
                     </Card.Body>
                </Card>
                <Card style={{ width: '350px',marginLeft:'50px' }}>
                    <Card.Img variant="top" src="https://play-lh.googleusercontent.com/SsmmlKoGqOhWqlJRomR9vCIUhNzA5S8prBlwV1ngRgjxTcrn_A6bhbyXVFmn9-p7sfQ" style={{height:'320px'}}/>
                    <Card.Body>
                        <Card.Title>Body Mass Index Calculator</Card.Title>
                        <Card.Text>
                            A website to search country and displays its details
                        </Card.Text>
                     </Card.Body>
                </Card>
            </div> */