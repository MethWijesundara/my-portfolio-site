const Header = () => {
    // ENTER YOUR NAME HERE
    const name = "Meth"

    // ENTER YOUR HEADLINE HERE
    const headline = "Software Developer ✨"
    return (
        <div>
            <header id='header'>
                <h1 className='header-name'>Hi! I'm {name}</h1>
                {/* <p className='headline'>{headline}</p> */}
            </header>
        </div>
    )
    
}

export default Header;