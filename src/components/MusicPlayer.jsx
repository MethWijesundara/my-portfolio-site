import "/src/styles/MusicPlayer.css";

// importing font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

// import audio player (not needed)
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";

// adding state
import React, { useState } from "react";

function MusicPlayer(){

    const [isPlaying, setIsPlaying] = useState(false);
    return(

        <section className="music-player">

            <h3><FontAwesomeIcon icon={faMusic} ></FontAwesomeIcon> My favorite tune at the moment</h3>

            <div className="container">

                <div className={`right ${isPlaying ? "playing" : ""}`}>
                    {/* <img
                        className="album-art"
                        src="/images/mona_lisa.jpg"
                        alt="Album Art">
                    </img> */}
                    <iframe
                        src="https://open.spotify.com/embed/track/5Fhr3wqeieN5WDkAsqL1JJ?" 
                        // src="https://www.youtube.com/embed/ECqGCH1TfLY"
                        width="100%" 
                        height="152" 
                        frameBorder='0' 
                        allow="autoplay; clipboard-write; encrypted media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe> 
                </div>

                {/* <div className="middle"> */}
                    {/* <h3 className="song">MONA LISA • <span className="artist"><i>j-hope</i></span></h3> */}
                    {/* <audio controls
                        onPlay={()=>setIsPlaying(true)}
                        onPause={()=>setIsPlaying(false)}
                    >
                        <source src="/music/mona_lisa.mp3" type="audio/mpeg" />
                    </audio> */}
                    {/* <p className="">Listen to the Preview on <span className="platform">Spotify ᯤ</span> </p> */}
                    {/* <Spotify link="https://open.spotify.com/track/5Fhr3wqeieN5WDkAsqL1JJ?autoplay_ok=1" /> */}
                    {/* using an <iframe> */}
                {/* <p className="music-credit">Music by j-hope | BIGHIT MUSIC</p> */}
                {/* </div> */}
            
            </div>
        </section>
        
    );
}

export default MusicPlayer;