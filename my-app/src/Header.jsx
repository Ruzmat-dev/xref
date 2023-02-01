import "./Header.css"

function Header() {
    return (
        <div className="header">

            <ul className="wrapper_menu">
                <li>Why Xref</li>
                <li>Solutions</li>
                <li>Platform</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>

            <div className="wrapper_sigin">
                <a href="#">Sign in</a>
                <button>Request a demo</button>
            </div>
        </div>

    )
}
export default Header;