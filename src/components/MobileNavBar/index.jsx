import { FaHome } from 'react-icons/fa';
import { FaFutbol } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import './style.css';

export const MobileNavBar = ({selectedScrenn, setSelectedScrenn}) => {
    return (
        <div className='mobile-nav-bar'>
            <div className={selectedScrenn === 1 ? "mobile-item-nav-bar nav-bar-selected" : "mobile-item-nav-bar"} onClick={() => setSelectedScrenn(1)}>
                <FaHome className='nav-icon' />
                <div>Home</div>
            </div>
            <div className={selectedScrenn === 2 ? "mobile-item-nav-bar nav-bar-selected" : "mobile-item-nav-bar"} onClick={() => setSelectedScrenn(2)}>
                <FaFutbol className='nav-icon' />
                <div>Jogos</div>
            </div>
            <div className={selectedScrenn === 3 ? "mobile-item-nav-bar nav-bar-selected" : "mobile-item-nav-bar"} onClick={() => setSelectedScrenn(3)}>
                <FaHackerrank className='nav-icon' />
                <div>Ranking</div>
            </div>
            <div className={selectedScrenn === 4 ? "mobile-item-nav-bar nav-bar-selected" : "mobile-item-nav-bar"} onClick={() => setSelectedScrenn(4)}>
                <FaUserAlt className='nav-icon' />
                <div>Perfil</div>
            </div>
        </div>
    )
}