import React from 'react'
import ServiceCard from '../../../global/components/service_card'
import AC from '../../../assests/images/home/AC duct.jpg'
import DUCT from '../../../assests/images/home/servicecard 2.jpg'
import HANDYMAN  from '../../../assests/images/home/SERVICECARD 3.jpg'
import PLUMBING from '../../../assests/images/home/SERVICECARD 4.jpg'

const OurServices = () => (
  <div className='ourServices page_width'>
    <h1 className='global_title'> Explore our <span>Services</span></h1>
    <div className="card_grid">
      <ServiceCard service_img={AC} title = 'AC DUCT'/>
      <ServiceCard service_img={DUCT}   title= "Duct Cleaning"/>
      <ServiceCard service_img={HANDYMAN}   title= "HANDYMAN"/>
      <ServiceCard service_img={PLUMBING}   title= "PLUMBING"/>
    </div>

  </div>
)

export default OurServices