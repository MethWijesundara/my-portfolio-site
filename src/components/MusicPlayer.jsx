import "/src/styles/MusicPlayer.css";

// importing font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

// import audio player
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// adding state
import React, { useState } from "react";




function MusicPlayer(){

    const [isPlaying, setIsPlaying] = useState(false);
    return(

        <section className="music-player">
                <h3><FontAwesomeIcon icon={faMusic} ></FontAwesomeIcon> My favorite tune at the moment</h3>
        <div className="container">
            {/* <div className="left">
            </div> */}

            {/* <div className="right"> */}
            <div className={`right ${isPlaying ? "playing" : ""}`}>
                <img
                    className="album-art"
                    src="/images/mona_lisa.jpg"
                    alt="Album Art">
                </img>
            </div>
            <div className="middle">
                <h3 className="song">MONA LISA • <span className="artist"><i>j-hope</i></span></h3>
                <audio controls
                    onPlay={()=>setIsPlaying(true)}
                    onPause={()=>setIsPlaying(false)}
                >
                    <source src="/music/mona_lisa.mp3" type="audio/mpeg" />
                </audio>
                {/* <AudioPlayer
                    src="/music/dracula.mp3"
                /> */}
            </div>
        </div>
        </section>
        
    );
}

export default MusicPlayer;