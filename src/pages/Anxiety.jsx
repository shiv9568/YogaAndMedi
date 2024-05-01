import React from 'react'
import './Anxiety.css'
const Anxiety = () => {
    return (
        <div>
            <div className="title">
                <div id="mainPage">
                    <a href="../index.html">
                        <span>
                            &#x2190;
                        </span>
                        Home Page
                    </a>
                </div>

                <div className="diseaseTitle">
                    <p>
                        Yoga asanas to overcome Anxiety and Depression
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="intro">
                    <div>
                        <p>
                            There’s nothing like the serenity, bliss, and relaxation that can come following a good yoga session. In fact, many first-time yoga practitioners are surprised by how elevated their mood is after a yoga class.
                        </p>
                    </div>
                    <div>
                        <p>
                            One of the primary reasons for this sense of upliftment is that exercise naturally increases serotonin levels in our brains. Seratonin is a neurotransmitter that makes us feel good. Unfortunately, it’s often deficient in people who suffer from depressive disorders.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ textDecoration: 'underline' }}>
                            Symptoms to know if you have an anxiety disorder:
                        </h3>
                        <ul>
                            <li>You feel unusually panicky, scared and uneasy.</li>
                            <li>You tend to get uncontrolled, obsessive thoughts of past traumatic experiences.</li>
                            <li>You wake up from frequent nightmares.</li>
                            <li>You tend to repeatedly wash your hands.</li>
                            <li>You have problems sleeping.</li>
                            <li>Your hands and feet stay unusually sweaty.</li>
                            <li>You get frequent palpitations</li>
                        </ul>
                    </div>
                    <div>
                        <img src="../images/depression_anxiety.jpg" alt="" />
                    </div>

                    <div>
                        <p>
                            Although there are hundreds of yoga poses, some are particularly good for dealing with anxiety and depression. Here, we will discuss some postures that you can incorporate into your own practice to invite greater mental health into your life.
                        </p>
                    </div>
                    <div>
                        <p>
                            As you practice these, be sure to breathe steadily and deeply, even when your body feels strained. Ideally, you should maintain ujjayi breath throughout your practice. Doing this will help you remain calm in states of adversity, a skill that can help you stay grounded in many of life’s challenging moments!
                        </p>
                    </div>
                </div>

                <div className="cure">
                    <h2>Yoga Tips to Overcome Anxiety</h2>

                    <ul>
                        <li>Do Yoga asanas and relieve your stress of mind</li>
                        <li>Breathe right with pranayamas to relieve anxiety</li>
                        <li>Meditate to enjoy the gift of a relaxed mind</li>
                        <li>Apply yoga philosophy in your life; stay happy and enjoy every moment</li>
                        <li>Pray, keep faith and smile!</li>
                        <li>Think about what you can do for others</li>
                        <li>Know the impermanence of the world</li>
                        <li>Remember a similar past situation when you could overcome anxiety</li>
                        <li>Keep a positive company around you</li>
                    </ul>
                </div>

                <div className="asana">
                    <h2>Yoga poses for better digestion: </h2>

                    <div className="asanaCollection">
                        <div className="box"><img src="../images/anulom-vulom.jpg" alt="" /><span><a href="/digestive/pranayam">Pranayam</a></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anxiety
