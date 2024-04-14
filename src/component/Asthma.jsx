import React from 'react'
import './Asthma.css'
const Asthma = () => {
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
                      Yoga asanas for Asthamatics
                  </p>
              </div>
          </div>

          <div className="container">
              <div className="intro">
                  <div>
                      <p>
                          <b>If you have asthma, you’re not alone. Approximately 300 million peopleTrusted Source around the world have this chronic inflammatory disorder.</b>Despite innumerable medical advances we’ve made in the last few decades, asthma - its causes and cures - still remains a mystery. Asthma, which affects the lungs by constricting the airways and making it harder for the person to breathe, is a by-product of many factors, some physiological and others because of environmental conditions.
                      </p>
                  </div>
                  <div>
                      <p>
                          In simple terms, asthma is a very strong response of the body’s immune system to fight the infiltration of substances in the lungs. Although there is no cure for asthma, leading a healthy lifestyle is credited to alleviating the problem to a point where the symptoms are almost negligible - and practising yoga asanas for asthma is observed to be especially helpful.
                      </p>
                  </div>
                  <div>
                      <img src="../images/anulom-vulom.jpg" alt="Image is not Available" />
                  </div>
              </div>

              <div className="cure">
                  <h2>How can yoga asanas improve Asthamatic patients?</h2>

                  <p>
                      Yoga helps in strengthening the lungs as it focuses on not only holding the asana but breathing through the same, allowing the respiratory system to work while the body is in unnatural poses. This in turn strengthens it. Practising yoga asanas for asthma has helped control asthma effectively and in some cases, asanas are used for preventing asthma attacks altogether.
                  </p>
              </div>

              <div className="asana">
                  <h2>Yoga poses for people with Asthma: </h2>

                  <div className="asanaCollection">
                      <div className="box"><img src="../images/step7-suryanamaskar.jpg" alt="Image is not Available" /><span><a href="../html/cobra.html">Cobra Pose</a></span></div>
                      <div className="box"><img src="../images/bhastrika.jpg" alt="Image is not Available" /><span><a href="../html/pranayam.html">Pranayam</a></span></div>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Asthma
