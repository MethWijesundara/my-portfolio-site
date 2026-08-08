import React from 'react';

// importing music player
import MusicPlayer from './MusicPlayer';

const Extra = () => {
    const languages =  ['🇬🇧 English', '🇱🇰 Sinhala'];
    const interests = ['🎵 K-Pop', '🚶‍♂️ Walks', '🐶 Spending time with pets','📽️ K-drama', '🚴 Cycling'];

    return(
        <section id='extra'>
            <div className='languages'>
                <h2><i className='fas fa-language'></i> Languages</h2>
                <ul>
                    {languages.map((lang,index)=>(
                        <li key={index}>{lang}</li>
                    ))}
                </ul>
            </div>

            <div className='interests'>
                <h2><i className='fas fa-star'></i> Interests</h2>
                <ul>
                    {interests.map((interest, index)=> (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>

            <div className='full-row'>
                <MusicPlayer />
            </div>
        </section>
    );
};

export default Extra;