function Header({ links }) {
    return <header>
        <header className="header">
            <div className="container">
                <img src="/img/dc-logo.png" alt="DC Comics Logo" className="logo" />
                <nav className="navMain">
                    <ul className="nav-list">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    </header>
}
export default Header;