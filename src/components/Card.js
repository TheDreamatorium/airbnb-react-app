export default function Card({
    img, 
    rating, 
    reviewCount, 
    country,
    title,
    price,
}) {
    return (
        <section className="card-container">
            <img className="card-img" src={img} alt="card" />
            <span className="card-status">SOLD OUT</span>
            <div className="card-info">
                <div className="card-rating">
                    <img src="/images/star.png" className="card-star" alt="star"/>
                    <span className="card-rating-text">{rating} <span>({reviewCount}).{country} </span></span>
                </div>
                <label className="card-label">{title}</label>
                <label className="card-price"><span>From {price}</span> / person</label>
            </div>
        </section>
    );
}
