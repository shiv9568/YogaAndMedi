import React, { Component, useEffect, useState } from "react"; import meditation from "../assets/meditation.png"
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { motion } from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 200,
        });
        AOS.refresh();
    }, []);
    return (


        <div className='flex justify-between mt-8 bg1'>
            <div className="">
                <motion.div >
                    <motion.img whileHover={{ scale: 1.2 }} className="img" src={meditation}></motion.img>
                </motion.div>
                <div className=""> </div>{" "}
            </div>
            <div className="mr-20">
                <h1 className='text-9xl mt-28 text-black'>yoga</h1>
                <h2 className='text-4xl mt-6 text-black'>𝓪𝓷𝓭 𝓶𝓮𝓭𝓲𝓽𝓪𝓽𝓲𝓸𝓷</h2>
                <p className=' text-2xl text-white'>BEND YOUR MIND,
                    INSPIRE YOURSELF</p>
                <a href="/booktoday"><AwesomeButton type="primary" className='mt-4 text-xl magnify'>Book Today</AwesomeButton></a>
            </div>
        </div>

    )
}

export default Home
