const Extra = () => {
    const languages =  ['🇬🇧 English', '🇱🇰 Sinhala'];
    const interests = ['🎵 K-Pop', '🚶‍♂️ Walks', '🐶 Spending time with pets','📽️ K-drama', '🚴 Cycling'];

    return(
        <section id='extra'>
            <h2><i class="fa-solid fa-circle-info"></i> EXTRAS</h2>

            <div className='extra-container'>

                <div className='languages'>
                    <h3><i className='fas fa-language'></i> Languages</h3>
                    <ul>
                        {languages.map((lang,index)=>(
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>

                <div className='interests'>
                    <h3><i className='fas fa-star'></i> Interests</h3>
                    <ul>
                        {interests.map((interest, index)=> (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Extra;