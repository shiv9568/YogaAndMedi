import React from 'react'
import './Heart.css'
const Heart = () => {
  return (
    <div>
        <div className="title">
            <div id="mainPage">
                <a href="../home">
                    <span>
                        &#x2190;
                    </span>
                    Home Page
                </a>
            </div>

            <div className="diseaseTitle">
                <p>
                    Yoga asanas for good heart health
                </p>
            </div>
        </div>

        <div className="container">
            <div className="intro">
                <div>
                    <p>
                        Today, there is no age factor that determines heart ailments. People in their 20s are falling prey to heart attacks. Is it because like Atlas, the world is on our shoulders? Is it because we skip our meals and substitute it with convenience food with zero nutrition? The reasons are many, especially related to an unhealthy lifestyle.
                    </p>
                </div>
                <div>
                    <p>
                        The good news is that one can do a lot about it. Committing to a healthier lifestyle is critical and easier to follow than most imagine. What if a few simple stretches and breathing exercises could make you feel good (especially your heart)! Yoga for healthy heart asanas are a preventive measure and are beneficial as a curative one too. And with no side-effects, except a feeling of greater peace and health.
                    </p>
                </div>
                <div>
                    <img src="../images/Heart-Health.jpg" alt="" />
                </div>
                <div>
                    <p>
                        Gurudev Sri Sri Ravi Shankar says: <b>“Yoga is a study of life, the study of your body, breath, mind, intellect, memory, and ego; study of your inner faculties.”</b>
                    </p>
                </div>
            </div>

            <div className="cure">
                <h2>How yoga asanas help in keeping our Heart healthy?</h2>

                <ul>
                    <li>Lower blood pressure.</li>
                    <li>Increase lung capacity.</li>
                    <li>Improved heart rate</li>
                    <li>Lower bad cholesterol levels.</li>
                    <li>Boost blood circulation.</li>
                </ul>
                <p>Yoga is effective in dealing with stress and pressure. That, itself, can heal a heart patient.</p>
            </div>

            <div className="asana">
                <h2>Yoga poses for healthy heart: </h2>

                <div className="asanaCollection">
                    <div className="box"><img src="../images/kapal-bhati.jpg" alt="" /><span><a href="../html/pranayam.html">Pranayam</a></span></div>
                    <div className="box"><img src="../images/step1-suryanamaskar.jpg" alt="" /><span><a href="../html/suryanamaskar.html">Suryanamaskar</a></span></div>
                    <div className="box"><img src="../images/step7-suryanamaskar.jpg" alt="" /><span><a href="../html/cobra.html">Cobra Pose</a></span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heart
