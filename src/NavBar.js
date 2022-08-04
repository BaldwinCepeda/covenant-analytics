import './styles.css';

export default function NavBar() {

    return <nav className="nav">
        <a href="https://www.covenant.vote/" className="site-title">Covenant Analytics</a>
        <ul>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Docs</a>
            </li>
            <li>
                <a href="">GitHub</a>
            </li>
        </ul>

    </nav>
}