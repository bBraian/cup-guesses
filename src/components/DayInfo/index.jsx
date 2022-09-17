import './style.css';

export function DayInfo(props) {
    return (
        <div className="day-infos">
            <div>Dia {props.day}</div>
            <div>{props.amountOfGames} jogos</div>
        </div>
    )
}