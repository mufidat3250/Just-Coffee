import React, { useState } from 'react'
import './Home.scss'
import Button from '../../atoms/Button'


const Home = () => {
    const randomImg = ['/image/home-img-1.png', '/image/home-img-2.png','/image/home-img-3.png']
    const [imgslide, setImageSlide] = useState("/image/home-img-1.png")
  return (
    <section className='  home-section'>
        <div className='row'>
        <div className='content'>
            <h3> Fresh Coffee in the morning</h3>
           <div className='w-[15rem]'>
           <Button title='Buy One Now'/>
           </div>
        </div>
        <div className='image'>
            <img src={imgslide} alt="" />
        </div>        
        </div>
        <div className='image-slider'>
       {
        randomImg.map((img, index)=> <img src={img} onClick={()=>setImageSlide(img)} alt=""  key={index}/>)
       }
        
        </div>
    </section>
  )
}

export default Home