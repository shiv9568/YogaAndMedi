import React, { useRef, useEffect } from 'react';
import './Activity.css';

const Activity = () => {
  const songRef = useRef(null);
  const playRef = useRef(null);
  const outlineRef = useRef(null);
  const videoRef = useRef(null);
  const timeDisplayRef = useRef(null);
  let fakeDuration = 600;

  const checkPlaying = () => {
    if (songRef.current.paused) {
      songRef.current.play();
      videoRef.current.play();
      playRef.current.src = "./svg/pause.svg";
    } else {
      songRef.current.pause();
      videoRef.current.pause();
      playRef.current.src = "./svg/play.svg";
    }
  };

  useEffect(() => {
    const circle = outlineRef.current;
    if (!circle) return;

    const radius = circle.getAttribute("r");
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    playRef.current.addEventListener("click", () => {
      checkPlaying();
    });

    songRef.current.ontimeupdate = () => {
      if (!songRef.current.duration) return; 

      let currentTime = songRef.current.currentTime;
      let elapsed = fakeDuration - currentTime;
      let seconds = Math.floor(elapsed % 60);
      let minutes = Math.floor(elapsed / 60);

      let progress = circumference - (currentTime / fakeDuration) * circumference;
      circle.style.strokeDashoffset = progress;
      timeDisplayRef.current.textContent = `${minutes}:${seconds}`;

      if (currentTime >= fakeDuration) {
        songRef.current.pause();
        songRef.current.currentTime = 0;
        playRef.current.src = "./svg/play.svg";
        videoRef.current.pause();
      }
    };

    // Update fakeDuration when the audio's duration is known
    songRef.current.onloadedmetadata = () => {
      fakeDuration = songRef.current.duration;
      timeDisplayRef.current.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    };
  }, []);

  const selectSound = (e) => {
    songRef.current.src = e.target.getAttribute('data-sound');
    videoRef.current.src = e.target.getAttribute('data-video');
    checkPlaying();
  };

  const selectTime = (e) => {
    fakeDuration = e.target.getAttribute('data-time');
    timeDisplayRef.current.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
  };


  return (
    <div className="app">
      <div className="vid-container">
        <video loop ref={videoRef}>
          <source src="./video/rain.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="time-select">
        <button onClick={selectTime} data-time="120"> 2 Min</button>
        <button onClick={selectTime} data-time="300"> 5 Min</button>
        <button onClick={selectTime} data-time="600"> 10 Min</button>
      </div>

      <div className="player-container">
        <audio className="song" ref={songRef}>
          <source src="./sounds/rain.mp3" />
        </audio>
        <img src="./svg/play.svg" alt="play" className="play" ref={playRef} />

        <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none"
          xmlns="http://www.w3.org/2000/svg" ref={outlineRef}>
          <circle cx="226.5" cy="226.5" r="216.5" stroke="white" strokeWidth="20" />
        </svg>

        <svg className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" strokeWidth="20" />
        </svg>
        <h3 className="time-display" ref={timeDisplayRef}> 0:00 </h3>
      </div>

      <div className="sound-picker">
        <button onClick={selectSound} data-sound="./sounds/rain.mp3" data-video="./video/rain.mp4">
          <img src="./svg/rain.svg" alt="rain" />
        </button>
        <button onClick={selectSound} data-sound="./sounds/beach.mp3" data-video="./video/beach.mp4">
          <img src="./svg/beach.svg" alt="beach" />
        </button>
      </div>
    </div>
  );
}

export default Activity;
