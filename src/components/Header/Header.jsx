import './Header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <div>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">inventory</a>
                <a href="/login">login</a>
            </div>
        </div>
    );
};

export default Header;