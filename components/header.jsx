function Header({ links }) {
    return <header>
        <header className="header">
            <div className="container">
                <img src="/img/dc-logo.png" alt="DC Comics Logo" className="logo" />
                <nav className="navMain">
                    <ul className="nav-list">
                        <li><a href="#">{links[0]}</a></li>
                        <li><a href="#">{links[1]}</a></li>
                        <li><a href="#">{links[2]}</a></li>
                        <li><a href="#">{links[3]}</a></li>
                        <li><a href="#">{links[4]}</a></li>
                        <li><a href="#">{links[5]}</a></li>
                        <li><a href="#">{links[6]}</a></li>
                        <li><a href="#">{links[7]}</a></li>
                        <li><a href="#">{links[8]}</a></li>
                        <li><a href="#">{links[9]}</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </header>
}
export default Header;