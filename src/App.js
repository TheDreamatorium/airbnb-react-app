import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./style.scss";
import cardData from "./data"


export default function App() {

    const cardElements = cardData.map(data => {
        return <Card
        img={"/images/" + data.img}
        rating={data.rating}
        reviewCount={data.reviewCount}
        country={data.country}
        title={data.title}
        price={data.price}
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
