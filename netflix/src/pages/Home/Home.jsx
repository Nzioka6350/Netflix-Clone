import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import hero_barner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_barner} alt='' className='bannerImage'/>
          <div className="hero-caption">
            <img src= {hero_title} alt='' className='caption-image'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque animi ad 
              laborum, possimus repellendus excepturi, veritatis ipsa autem dolorum incidunt aliquam 
              officia blanditiis voluptas illum quibusdam inventore quidem eius fugit.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Home