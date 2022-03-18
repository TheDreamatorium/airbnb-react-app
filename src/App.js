import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./style.scss";

export default function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Card></Card>
        </div>
    )
}
