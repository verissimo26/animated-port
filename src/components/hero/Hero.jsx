import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Igor VERSSIMo</h2>
                    <h1>Web Developer and UX/UI Designer</h1>
                    <div>
                        <button>See my latest Works</button>
                        <button>SContact - me</button>
                    </div>
                    <div><img src="scroll.png" alt="" /></div>
                </div>
            </div>

            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero