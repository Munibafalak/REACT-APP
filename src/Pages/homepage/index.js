import React from 'react'
import './style.css'
import Herosection from './components/heroSection'
import OurServices from './components/ourServices'
import OurClient from './components/ourClient'

const HomePage = () => (
  <>
    <Herosection />
    <OurServices />
    <OurClient />
  </>
)

export default HomePage