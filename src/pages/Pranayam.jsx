import React from 'react'
import './Pranyam.css'

const Pranayam = () => {
    return (
        <div>
   <div className="title">
                <div id="mainPage"><a href="/heart"> <span>
                    &#x2190;
                </span> Home Page</a></div>
        <div className="asanaTitle"><p>Paripurna Navasana - Boat Pose</p></div>
        <div className="asanasubtitle">Boat Pose, or Paripurna Navasana, requires you to balance on the tripod of your sitting bones and tailbone to build mental and physical focus, inspiring a full-body awareness.</div>
    </div>
    <div className="container">
        <div id="intro">Full boat pose, also known as Paripurna Navasana (from the Sanskrit words “paripurna” meaning “full,” “nava” for “boat,” and “asana” for “posture”), is a seated yoga pose in which you extend your legs and arms so that your body resembles an upside-down capital “A.” This yoga posture involves core strength, coordination, and balance and can help strengthen the torso, stretch the hamstrings, and aid digestion.<br/><br/>
         Boat pose has a few benefits, including: <br/>
        1. Helps digestion. The diaphragm’s elevation during boat pose allows air to flow through the abdomen more freely, stimulating the internal organs. This airflow can help relieve pressure on both the liver and stomach, aiding digestion. <br/>
        2. Strengthens the torso. Boat pose opens the chest and engages the muscles in your core while also strengthening the hip flexors and adductor muscles (muscles that help with hip extension). <br/>
        3. Stretches the hamstrings. Boat pose can help alleviate tightness in the hamstrings, which can reduce flexibility or potentially lead to injury.<br/>
        Boat Pose builds focus and body awareness. It can boost energy and fight fatigue, and help build confidence and empowerment. Boat Pose also improves posture and counteracts the effects of prolonged sitting and doing computer work by strengthening your core and thighs.
        </div><br/>
        
        <div className="stepstofollow">
            <h1>Steps to do  Paripurna Navasana:</h1>
                <div className="step"><div className="img"><img src="../images/boat_pose.png" alt="Yoga pose"/></div>
            <p className="asanadesc"><ol><li>Sit on the floor with your legs straight in front of you. Press your hands on the floor a little behind your hips.</li>
            <li>Lift through the top of the sternum and lean back slightly, making sure your back doesn’t round. Balance your weight on the tripod of your sitting bones and tailbone.</li>
            <li>Exhale and bend your knees, then lift your thighs so they are angled about 45 degrees above the floor, with your knees still bent.</li>
            <li>Keeping your heart open and your spine long, draw your shoulders back and extend both arms forward alongside the legs, parallel to the floor, with your palms facing in. Try to keep your lower belly flat and firm, but not hard and thick.</li>
            <li>Do whichever feel more comfortable for you. If you've been doing a lot of shoulder work, the second option feels nice.</li>
            <li>Point your toes or flex through your heels, and breathe. Try to stay in the pose for 10 to 20 seconds, slowly increasing your time to a minute.</li></ol></p><br/><br/></div>

        </div>
        <div className="ytVedioSteps">
            <p>You can even try Boat Pose by following the simple steps through this video guide: </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8KsyQvwi85Q?si=3jlIElgzfiSbJzlq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
        </div>
  )
}

export default Pranayam