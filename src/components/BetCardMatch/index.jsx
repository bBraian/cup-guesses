import { countries } from '../../data/countries';

import { FaEdit } from 'react-icons/fa';
import './style.css';

export function BetCardMatch(props) {
    let hteam = countries.filter(country => country.id === props.match.hTeam);
    let ateam = countries.filter(country => country.id === props.match.aTeam);

    return (
        <li className="game-box">
            <div className="gamebox-stadium-box">
                <span className="gamebox-stadium-tex">{props.match.stadium}</span>
            </div>
            <div className="gamebox-content">
                <div className="gamebox-content-row">

                    <div className='team1'>
                        <div className="name-team1">{hteam[0].prefixName}</div>
                        <div className="logo-team1" style={{backgroundImage: `url(${hteam[0].logo})`}}></div>
                    </div>
                    <input type="text" className="result-input1" />

                    <div className="game-box-versus">x</div>

                    <input type="text" className="result-input2" />

                    <div className='team2'>
                        <div className="logo-team2" style={{backgroundImage: `url(${ateam[0].logo})`}}></div>
                        <div className="name-team2">{ateam[0].prefixName}</div>
                    </div>

                </div>
                <div className="gamebox-editors">
                    <FaEdit size={20} />
                </div>
            </div>
        </li>
    )
}