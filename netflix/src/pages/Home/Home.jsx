import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import hero_barner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../TitleCards/TitleCards'

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
            <div className="hero-btns">
              <button className='btn'><img  src={play_icon}/>Play</button>
              <button  className='btn dark-btn' ><img src={info_icon}/>More Info</button>
            </div>
          </div>
        </div>
        <TitleCards/>
        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards  title={"Only on Netflix"}/>
        <TitleCards  title={"Upcoming"} />
        <TitleCards  title={"Top Pics for you"}/>
        </div>
    </div>
  )
}

export default Home