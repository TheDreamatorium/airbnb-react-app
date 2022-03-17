import gridImg from "../images/grid-hero.png";

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-grid" src={gridImg}/>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by <br/>
                    one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </div>
    )    
}
