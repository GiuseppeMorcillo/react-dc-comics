function Footer() {
    return (
        <footer>
            <div className="mainFooter">
                <div className="containerFooter"> {/* Aggiungi un container per allineare il contenuto */}
                    <div className="footerColumns">
                        <div className="footerColumn">
                            <h3>DC COMICS</h3>
                            <ul>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>DC</h3>
                            <ul>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy policy (New)</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>SITES</h3>
                            <ul>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>SHOP</h3>
                            <ul>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div><img className="footerLogoBg" src="/public/img/dc-logo-bg.png" alt="DC Logo" /></div>
            </div>
            <div className="secondaryFooter">
                <div className="container">
                    <button className="signUpButton">SIGN-UP NOW!</button>
                    <div className="socialIcons">
                        <h3>FOLLOW US</h3>
                        <img src="img/footer-facebook.png" alt="Facebook" />
                        <img src="img/footer-twitter.png" alt="Twitter" />
                        <img src="img/footer-youtube.png" alt="YouTube" />
                        <img src="img/footer-pinterest.png" alt="Pinterest" />
                        <img src="img/footer-periscope.png" alt="Periscope" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
