import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const vidRef=useRef();
    useEffect(()=>{
        if(vidRef.current) vidRef.current.playbackRate=2;
    },[])
    return (
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src="/title.png" alt="macbook"/>
            </div>
            <video ref={vidRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
            <button>Buy</button>
            <p>from $1599 or $133/mo for 12 months</p>
        </section>
    )
}
export default Hero
