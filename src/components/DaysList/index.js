import './style.css';

export const DaysList = ({daySelected, setDaySelected, days}) => {
    return (
        <div className='days-list'>
            <ul className='days-list-scroll'>
                {days.map(day => {
                    return (
                        <li className={daySelected === day.id ? 'day-selected' : 'day-list-item'} key={day.id} onClick={() => setDaySelected(day.id)}>
                            <div className='box-day-item'>
                                <div className='day-title'>{day.title}</div>
                                <div className='day-content'>{day.day}</div>
                            </div>
                            {day.id == days.length ? "" : <div className='day-separator'></div>}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}