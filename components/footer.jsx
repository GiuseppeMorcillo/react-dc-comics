function Footer({ footerLinks }) {
    return (
        <footer>
            <div className="mainFooter">
                <div className="containerFooter">
                    <div className="footerColumns">
                        <div className="footerColumn">
                            <h3>DC COMICS</h3>
                            <ul>
                                <li><a href="#">{footerLinks.dcComics[0]}</a></li>
                                <li><a href="#">{footerLinks.dcComics[1]}</a></li>
                                <li><a href="#">{footerLinks.dcComics[2]}</a></li>
                                <li><a href="#">{footerLinks.dcComics[3]}</a></li>
                                <li><a href="#">{footerLinks.dcComics[4]}</a></li>
                                <li><a href="#">{footerLinks.dcComics[5]}</a></li>
                                <li><a href="#">{footerLinks.dcComics[6]}</a></li>
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>DC</h3>
                            <ul>
                                <li><a href="#">{footerLinks.dc[0]}</a></li>
                                <li><a href="#">{footerLinks.dc[1]}</a></li>
                                <li><a href="#">{footerLinks.dc[2]}</a></li>
                                <li><a href="#">{footerLinks.dc[3]}</a></li>
                                <li><a href="#">{footerLinks.dc[4]}</a></li>
                                <li><a href="#">{footerLinks.dc[5]}</a></li>
                                <li><a href="#">{footerLinks.dc[6]}</a></li>
                                <li><a href="#">{footerLinks.dc[7]}</a></li>
                                <li><a href="#">{footerLinks.dc[8]}</a></li>
                                <li><a href="#">{footerLinks.dc[9]}</a></li>
                                <li><a href="#">{footerLinks.dc[10]}</a></li>
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>SITES</h3>
                            <ul>
                                <li><a href="#">{footerLinks.sites[0]}</a></li>
                                <li><a href="#">{footerLinks.sites[1]}</a></li>
                                <li><a href="#">{footerLinks.sites[2]}</a></li>
                                <li><a href="#">{footerLinks.sites[3]}</a></li>
                                <li><a href="#">{footerLinks.sites[4]}</a></li>
                            </ul>
                        </div>
                        <div className="footerColumn">
                            <h3>SHOP</h3>
                            <ul>
                                <li><a href="#">{footerLinks.shop[0]}</a></li>
                                <li><a href="#">{footerLinks.shop[1]}</a></li>
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
