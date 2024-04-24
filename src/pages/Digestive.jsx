import React from 'react'
import './Digestive.css'

const Digestive = () => {
  return (
    <div>
        <div className="title">
            <div id="mainPage">
                <a href="/">
                    <span>
                        &#x2190;
                    </span>
                    Home Page
                </a>
            </div>

            <div className="diseaseTitle">
                <p>
                    Yoga asanas for good digestion
                </p>
            </div>
        </div>

        <div className="container">
            <div className="intro">
                <div>
                    <p>
                        <b>Bad digestion is the root of all evil,</b>’ says Hippocrates. Our ancient texts concur. <b> According
                            to Ayurveda, the root cause of all disorders lies in poor digestion.</b> That is why it is
                        imperative that our digestive fire remain strong. So that the food that we eat is efficiently
                        metabolized. Otherwise, regardless of how healthy our food choices may be, our body will find it
                        difficult to assimilate and absorb the nutrients present in what we eat.
                    </p>
                </div>
                <div>
                    <img src="../images/Yoga and Digestion.jpg" alt="" />
                </div>
                <div>
                    <h3 style={{ textDecoration: "underline" }}>
                        Understanding the Digestive process:
                    </h3>

                    <p>
                        Think of the digestive system as a juicer, ‘agni’ as juicer blades, body toxins as fruit waste, and
                        energy as juice!
                    </p>

                    <p>
                        If the juicer blades are weak, there is less juice and more fruit waste. So, if the ‘agni’ (juicer blades)
                        is weak, the digestive system produces less energy (juice). This results in more toxins (fruit waste)
                        getting accumulated in the cells. Thus, a strong agni is required for a good digestive system. With its
                        rejuvenating powers, <b>yoga can make your agni strong and help improve your digestion!</b>
                    </p>
                </div>
            </div>

            <div className="cure">
                <h2>How can yoga asanas improve digestion?</h2>

                <ul>
                    <li>The digestive fire or agni is stimulated. This increases the appetite and balances the metabolism.</li>
                    <li>Asanas stretch the body, massaging the abdominal muscles. This causes food to move efficiently along the digestive tract.</li>
                    <li>Bowel movement is regulated and constipation relieved.</li>
                    <li>Circulation of blood to the digestive organs increases, thus aiding digestion.</li>
                    <li>Yoga asanas keep the mind active and happy. You are more likely to eat a balanced diet and this eases digestion.</li>
                    <li>Regular practice of yoga discourages fatty deposits.</li>
                    <li>The body is effectively detoxed. Toxins accumulated from a bad diet, unhealthy lifestyles and stress are flushed out.</li>
                </ul>
            </div>

            <div className="asana">
                <h2>Yoga poses for better digestion: </h2>

                <div className="asanaCollection">
                      <div className="box"><img src="../images/balasana.jpg" alt="" /><span><a href="/digestive/balasana"> Balasana</a></span></div>
                      <div className="box"><img src="../images/boat_pose.png" alt="" /><span><a href="/digestive/paripurnanavasana">Nauka-asana</a></span></div>
                      <div className="box"><img src="../images/anulom-vulom.jpg" alt="" /><span><a href="/digestive/pranayam">Pranayam</a></span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digestive
