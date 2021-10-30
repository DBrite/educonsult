import React from 'react'
import '../../App.css'
import HeroSection from '../hero-section'
import Herosection1 from '../Herosection1'
import {homeObjOne,homeObjTwo,homeObjThree} from '../Data'
import NewSection from '../NewSection'
import Forms from '../Forms'
import Footer from '../Footer'


function Home() {
    return (
        <div>
            <HeroSection/>
            {/* <Herosection1 {...homeObjOne}/> */}
            <NewSection/>
            <Forms/>
            {/* <Footer/> */}
            
        </div>
    )
}

export default Home
