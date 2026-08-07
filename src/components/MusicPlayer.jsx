import "/src/styles/MusicPlayer.css";

// importing font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";


function MusicPlayer(){
    return(

        <section className="music-player">
                <h3><FontAwesomeIcon icon={faMusic} ></FontAwesomeIcon> Want to hear what I listen to while I code?</h3>
        <div className="container">
            {/* <div className="left">
            </div> */}

            <div className="middle">
                <h3>Less Than a Lover • <span className="artist"><i>JM & JENNIE</i></span> </h3>
                <audio controls>
                    <source src="/music/Less_than_a_lover.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <div className="right">
                <img
                    className="album-art"
                    src="/images/music.jpg"
                    alt="Album Art">
                </img>
            </div>
        </div>
        </section>
        
    );
}

export default MusicPlayer;