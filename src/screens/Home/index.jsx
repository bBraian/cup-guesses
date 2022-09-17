import { useEffect, useState } from "react";

import { matches } from '../../data/matches';

import { DaysList } from "../../components/DaysList";
import { DayInfo } from "../../components/DayInfo";
import { BetCardMatch } from "../../components/BetCardMatch";

import './style.css';

export const Home = () => {
    const [daySelected, setDaySelected] = useState('07/12');
    const [dayMatches, setDayMatches] = useState([]);

    useEffect(() => {
        let filteredDayMatches = matches.filter(match => match.day === daySelected)
        setDayMatches(filteredDayMatches);
    },[daySelected])

    return (
        <div className="home">
            <DaysList daySelected={daySelected} setDaySelected={setDaySelected} />

            <DayInfo day={daySelected} amountOfGames={dayMatches.length} />

            <ul className="games-list">
                { dayMatches.map(match => {
                    return (
                        <BetCardMatch key={match.id} match={match} />
                    )
                }) }
            </ul>
        </div>
    );
}