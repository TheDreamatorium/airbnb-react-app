export default function Card(props) {
    let badgeText

    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className="card-container">
            <img className="card-img" src={`../images/${props.img}`} alt="card" />
            {badgeText && <span className="card-status">{badgeText}</span>}
            <div className="card-info">
                <div className="card-rating">
                    <img src="/images/star.png" className="card-star" alt="star"/>
                    <span className="card-rating-text">{props.rating} <span>({props.reviewCount}).{props.country} </span></span>
                </div>
                <label className="card-label">{props.title}</label>
                <label className="card-price"><span>From {props.price}</span> / person</label>
            </div>
        </section>
    );
}
