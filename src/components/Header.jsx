import { Link } from "react-router-dom";
import './styles/Header.css'

function Header() {
    return(
        <header className="header">
            <div className="header-content">
            <h1><Link to="/">Original Store</Link></h1>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart"><i className="bi bi-cart4" style={{fontSize: '1.5rem', marginLeft: '5rem'}}></i></Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;