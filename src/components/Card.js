import cardImg from "../images/swimmer.png";
import starImg from "../images/star.png";

export default function Card() {
    return (
        <section className="card-container">
            <img className="card-img" src={cardImg} alt="card" />
            <span className="card-status">SOLD OUT</span>
            <div className="card-info">
                <div className="card-rating">
                    <img src={starImg} className="card-star" alt="star"/>
                    <span className="card-rating-text">5.0 <span>(6).USA </span></span>
                </div>
                <label className="card-label">Life lessons with Katie Zaferes</label>
                <label className="card-price"><span>From $136</span> / person</label>
            </div>
        </section>
    );
}
