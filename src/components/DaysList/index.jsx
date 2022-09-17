import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { days } from "../../data/days";
import './style.css';

export const DaysList = ({daySelected, setDaySelected }) => {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 5
        },
        
      })
    return (
        <div className='days-list'>
            <ul ref={sliderRef} className='keen-slider days-list-scroll'>
                {days.map(day => {
                    return (
                        <li 
                            className={daySelected === day.day ? 'keen-slider__slide day-selected' : 'keen-slider__slide day-list-item'} 
                            key={day.id} 
                            onClick={() => setDaySelected(day.day)}
                        >
                            <div className='box-day-item'>
                                <div className='day-title'>{day.title}</div>
                                <div className='day-content'>{day.day}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}