import { faBoxOpen, faHeart, faUser, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Profile(props) {
    return <div className="profile">
        <FontAwesomeIcon icon={props.icon} size="md" />
        <Link to={props.link} className="list">{props.text}</Link>
    </div>
}

function SearchContainer() {

    return <div className="search-container">
        <div className="input-search-container">
            <input className="input-search" type="search" placeholder="search" />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    </div>
}


function Navbar() {

    return <nav className="navbar">
        <h1 className="navbar-logo">
            <FontAwesomeIcon icon={faBoxOpen} size="lg" />&nbsp;unBox</h1>
        <div className="input-search-container">
            <input className="input-search" type="search" placeholder="search" />
            <FontAwesomeIcon icon={faSearch} />
        </div>
        <ul className="navbar-ul">
            <Link to="/" className="list">Home</Link>
            <Link to="/giftbox" className="list">Giftbox</Link>
            <Link to="/more" className="list">More</Link>

        </ul>
        <ul className="navbar-ul navbar-user-ul">
            <Profile link="/wishlist" text="Wishlist" icon={faHeart} />
            <Profile link="/cart" text="Cart" icon={faCartShopping} />
            <Profile link="/profile" text="Profile" icon={faUser} />

        </ul>
    </nav>
}












export { Navbar, SearchContainer };