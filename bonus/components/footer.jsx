function Footer({ footerLinks }) {
    return (
        <footer>
            <div className="mainFooter">
                <div className="containerFooter">
                    <div className="footerColumns">
                        <div className="footerColumn">
                            <h3>DC COMICS</h3>
                            <ul>
                                {
                                    footerLinks.dcComics.map(link => <li><a href="#">{link}</a></li>)
                                }
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>DC</h3>
                            <ul>
                                {
                                    footerLinks.dc.map(link => <li><a href="#">{link}</a></li>)
                                }
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>SITES</h3>
                            <ul>
                                {
                                    footerLinks.sites.map(link => <li><a href="#">{link}</a></li>)
                                }
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>SHOP</h3>
                            <ul>
                                {
                                    footerLinks.shop.map(link => <li><a href="#">{link}</a></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
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
