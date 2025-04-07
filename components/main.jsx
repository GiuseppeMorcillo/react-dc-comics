import ComicCard from "./products/ComicCard";
import comics from "./products/comics.js"
function Main() {
    return <main>
        <div className="containerMain">
            <div className="content-here">
                <div className="series-banner">
                    <h2>CURRENT SERIES</h2>
                </div>
                <div className="comic-grid">
                    {comics.map((comic, index) => (
                        <ComicCard key={index} title={comic.title} thumb={comic.thumb} />
                    ))}
                </div>
                <div className="load-more">
                    <button>LOAD MORE</button>
                </div>
            </div>
            <div className="digital-comics">
                <ul>
                    <li><a href="#"><img src="/img/buy-comics-digital-comics.png" alt="buy comics digital" />Digital Comics</a></li>
                    <li><a href="#"><img src="/img/buy-comics-merchandise.png" alt="buy comics digital" />DC Merchandise</a></li>
                    <li><a href="#"><img src="/img/buy-comics-subscriptions.png" alt="buy comics digital" />Subscription</a></li>
                    <li><a href="#"><img src="/img/buy-comics-shop-locator.png" alt="buy comics digital" />Comic Shop Locator</a></li>
                    <li><a href="#"><img src="/img/buy-dc-power-visa.svg" alt="buy comics digital" />DC Power Visa</a></li>
                </ul>
            </div>
        </div>
    </main>
}
export default Main;