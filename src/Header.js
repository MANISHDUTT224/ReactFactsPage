 export default function Header() {
    return (
        <header>
            <img src="./logo512.png"  className="nav-logo" alt="logo"  />
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
