import { FaHome, FaFutbol, FaHackerrank, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './style.css';

export const MobileNavBar = () => {
    return (
        <div className='mobile-nav-bar'>
            <NavLink to="/home" title="Home" className="mobile-item-nav-bar">
                <FaHome className='nav-icon' />
                <div>Home</div>
            </NavLink>
            <NavLink to="/matches" title="Jogos" className="mobile-item-nav-bar">
                <FaFutbol className='nav-icon' />
                <div>Jogos</div>
            </NavLink>
            <NavLink to="/rank" title="Ranking" className="mobile-item-nav-bar">
                <FaHackerrank className='nav-icon' />
                <div>Ranking</div>
            </NavLink>
            <div className="mobile-item-nav-bar">
                <FaUserAlt className='nav-icon' />
                <div>Perfil</div>
            </div>
        </div>
    )
}