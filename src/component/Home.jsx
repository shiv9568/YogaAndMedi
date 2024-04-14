import React from 'react'
import meditation from "../assets/meditation.png"
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const Home = () => {
    return (
        
        <div className='flex justify-between mt-8'>
                <div className="">
                <img className="img" src={meditation}></img>
                    <div className=""> </div>{" "}
                </div>
                <div className="mr-20">
                <h1 className='text-9xl mt-28'>yoga</h1>
                    <h2 className='text-4xl mt-6'>𝓪𝓷𝓭 𝓶𝓮𝓭𝓲𝓽𝓪𝓽𝓲𝓸𝓷</h2>
                <AwesomeButton type="primary" className='mt-4 text-xl magnify'>Book Today</AwesomeButton>
                </div>
            </div>
        
    )
}

export default Home
