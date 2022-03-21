import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./style.scss";
import cardData from "./data"


export default function App() {

    const cardElements = cardData.map(data => {
        return <Card
        key={data.id}
        {...data}
        />
    })
    return (
        <div>
            <NavBar/>
            <Hero/>
            <div className="cards">
                {cardElements}
            </div>
        </div>
    )
}
