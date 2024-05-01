import React, { useRef, useEffect, useState } from 'react';
import './Activity.css';

const Activity = () => {
  const songRef = useRef(null);
  const playRef = useRef(null);
  const outlineRef = useRef(null);
  const videoRef = useRef(null);
  const timeDisplayRef = useRef(null);
  const [fakeDuration, setFakeDuration] = useState(600);

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

    const updateTime = () => {
      if (!songRef.current.duration) return;

      let currentTime = songRef.current.currentTime;
      let elapsed = fakeDuration - currentTime;
      let seconds = Math.floor(elapsed % 60);
      let minutes = Math.floor(elapsed / 60);

      let progress = circumference - (currentTime / fakeDuration) * circumference;
      circle.style.strokeDashoffset = progress;
      timeDisplayRef.current.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (currentTime >= fakeDuration) {
        songRef.current.pause();
        songRef.current.currentTime = 0;
        playRef.current.src = "/svg/play.svg";
        videoRef.current.pause();
      }
    };

    songRef.current.ontimeupdate = updateTime;
    songRef.current.onloadedmetadata = () => {
      setFakeDuration(songRef.current.duration);
      updateTime(); // Update time display when duration is known
    };

    return () => {
      songRef.current.ontimeupdate = null; // Clear timeupdate listener
    };
  }, [fakeDuration]); // Ensure useEffect runs when fakeDuration changes

  const checkPlaying = () => {
    if (songRef.current.paused) {
      songRef.current.play();
      videoRef.current.play();
      playRef.current.src = "/svg/pause.svg";
    } else {
      songRef.current.pause();
      videoRef.current.pause();
      playRef.current.src = "/svg/play.svg";
    }
  };

  const selectSound = (e) => {
    console.log("Clicked element:", e.target);
    console.log(e.target.getAttribute('data-sound'));
    const soundSrc = e.target.getAttribute('data-sound');
    const videoSrc = e.target.getAttribute('data-video');

    console.log("Selected sound:", soundSrc);
    console.log("Selected video:", videoSrc);
    songRef.current.src = soundSrc;
    videoRef.current.src = videoSrc;

    checkPlaying();
  };

  const selectTime = (e) => {
    setFakeDuration(parseInt(e.target.getAttribute('data-time')));
    let minutes = Math.floor(fakeDuration / 60);
    let seconds = Math.floor(fakeDuration % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds; // Add padding zero if seconds less than 10
    timeDisplayRef.current.textContent = `${minutes}:${seconds}`;
  };

  return (
    <div className="app">
      <div className="vid-container">
        <video loop ref={videoRef}>
          <source src="/video/rain.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="time-select">
        <button onClick={selectTime} data-time="120"> 2 Min</button>
        <button onClick={selectTime} data-time="300"> 5 Min</button>
        <button onClick={selectTime} data-time="600"> 10 Min</button>
      </div>

      <div className="player-container">
        <audio className="song" ref={songRef}>
          <source src="/sounds/rain.mp3" />
        </audio>
        <img
          src="/svg/play.svg"
          alt="play"
          className="play mb-[23vh] ml-2"
          ref={playRef}
           // bg-pink-400 in Tailwind CSS
        />
        <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none"
          xmlns="http://www.w3.org/2000/svg" ref={outlineRef}>
          <circle cx="226.5" cy="226.5" r="216.5" stroke="white" strokeWidth="20" />
        </svg>

        <svg className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" strokeWidth="20" />
        </svg>
        <h3 className="time-display " ref={timeDisplayRef}> 0:00 </h3>
      </div>

      <div className="sound-picker">
        <button onClick={selectSound} data-sound="/sounds/rain.mp3" data-video="/video/rain.mp4">
          <img src="/svg/rain.svg" alt="rain" />
        </button>
        <button onClick={selectSound} data-sound="/sounds/beach.mp3" data-video="/video/beach.mp4">
          <img src="/svg/beach.svg" alt="beach" />
        </button>

      </div>

    </div>
  );
}

export default Activity;
