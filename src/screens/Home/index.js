import { DaysList } from "../../components/DaysList";
import './style.css';
import { useEffect, useState } from "react";
import { days } from "../../data/days";
import { FaEdit } from 'react-icons/fa';
import { matches } from '../../data/matches';
import { countries } from '../../data/countries';

export const Home = () => {
    const [daySelected, setDaySelected] = useState(1);
    const [textDay, setTextDay] = useState('07/12');
    const [amountOfGames, setAmountOfGames] = useState(0);
    const [dayMatches, setDayMatches] = useState([]);

    useEffect(() => {
        let filteredDay = days.filter(day => day.id === daySelected);
        setTextDay(filteredDay[0].day);
        let filteredDayMatches = matches.filter(match => match.day == filteredDay[0].day)
        setDayMatches(filteredDayMatches);
        setAmountOfGames(filteredDayMatches.length);
    },[daySelected])

    return (
        <div className="home">
            <DaysList daySelected={daySelected} setDaySelected={setDaySelected} days={days} />
            <div className="day-infos">
                <div>Dia {textDay}</div>
                <div>{amountOfGames} jogos</div>
            </div>
            <ul className="games-list">
                { dayMatches.map(match => {
                    let hteam = countries.filter(country => country.id === match.hTeam);
                    let ateam = countries.filter(country => country.id === match.aTeam);
                    return (
                        <li className="game-box" key={match.id}>
                            <div className="gamebox-stadium-box">
                                <span className="gamebox-stadium-tex">{match.stadium}</span>
                            </div>
                            <div className="gamebox-content">
                                <div className="gamebox-content-row">
        
                                    <div className="name-team1">{hteam[0].prefixName}</div>
                                    <div className="logo-team1" style={{backgroundImage: `url(${hteam[0].logo})`}}></div>
                                    <input type="number" className="result-input1" />
        
                                    <div className="game-box-versus">x</div>
        
                                    <input type="number" className="result-input2" />
                                    <div className="logo-team2" style={{backgroundImage: `url(${ateam[0].logo})`}}></div>
                                    <div className="name-team2">{ateam[0].prefixName}</div>
        
                                </div>
                                <div className="gamebox-editors">
                                    <FaEdit />
                                </div>
                            </div>
                        </li>
                    )
                }) }
            </ul>
        </div>
    );
}