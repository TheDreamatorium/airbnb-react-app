import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./style.scss";
import cardImg from "./images/swimmer.png";


export default function App() {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <div className="cards">
                <Card
                    img={cardImg}
                    rating="5.0"
                    reviewCount={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
                <Card
                    img={cardImg}
                    rating="5.0"
                    reviewCount={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
            </div>
        </div>
    )
}
