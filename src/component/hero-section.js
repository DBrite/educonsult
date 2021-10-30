import React from 'react'
import '../App.css'
import { Button } from './Button'
import './hero-section.css'
import Herosection1 from './Herosection1'
import {homeObjOne,homeObjTwo,homeObjThree} from './Data'

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <div className='hero-btns'>
                
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn-large' buttonColor='blue'>
                   
                    Apply Now
                </Button>
            </div>
             {/* <div className='new_hero'>
                 <Herosection1 {...homeObjTwo}/>
            </div>  */}
            

        </div>

        // <div> <Herosection1/> </div>
    
    )
}

export default HeroSection