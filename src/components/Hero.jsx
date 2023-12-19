import React,{useEffect, useRef} from 'react'
import "./hero.css"
import {gsap} from 'gsap'
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import animationData from '../assets/hero.json'

function Hero() {
  const heroRef= useRef(LottieRefCurrentProps)

    useEffect(() => {
        gsap.set('.hero-bg-title', {y:'-600px', scale:0, opacity:0});
        gsap.set('.hero-bg-small-title', {y:'800px', scale:0, opacity:0});
        gsap.set('.hero-bg-image', {y:'0'});
        const isMobile = window.innerWidth <= 612;
        if(isMobile) {

          gsap.to('.hero-bg-title', {
            duration:4,
            y:'-100px',
            ease:'power2.inOut',
            delay:-0.6,
            scale:1,
            opacity:1
        })
        gsap.to('.hero-bg-small-title', {
            duration:4,
            y:'60px',
            ease:'power2.inOut',
            delay:-0.6,
            scale:1,
            opacity:1
        })
        gsap.to('.hero-bg-title', {
          duration:2,
          y:'0',
          ease:'power2.inOut',
          delay:5,
          scale:1,
          opacity:1
      })
      gsap.to('.hero-bg-small-title', {
          duration:2,
          y:'',
          ease:'power2.inOut',
          delay:5,
          scale:1,
          opacity:1
      })
        } else {
    
        gsap.to('.hero-bg-title', {
          duration:4,
          y:'0px',
          ease:'power2.inOut',
          delay:0.6,
          scale:1,
          opacity:1
      })

      gsap.to('.hero-bg-small-title', {
          duration:4,
          y:'0px',
          ease:'power2.inOut',
          delay:0.6,
          scale:1,
          opacity:1
      })
      }

      }, []);
  return (
    <div className='hero-container'>
            <div className="hero-bg-image">
              <Lottie onDOMLoaded={()=> { 
                heroRef.current?.setSpeed(0.8)
              }} onComplete={()=> {
                heroRef.current?.setDirection(-1)
                heroRef.current?.play()
              }} lottieRef={heroRef} loop={false} animationData={animationData}/>
            </div>
            <div className="hero-bg-text">
                <h1 className='hero-bg-title'>Balogh Dávid</h1>
                <p className='hero-bg-small-title'>Junior Szoftverfejlesztő</p>
            </div>
    </div>
  )
}

export default Hero