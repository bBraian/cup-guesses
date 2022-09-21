import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { groupsChar } from "../../../../data/groupsChar";
import './style.css';

export const GroupsList = ({selectedGroup, setSelectedGroup }) => {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 5
        },  
    })
    
    return (
        <div className='groups-list'>
            <ul ref={sliderRef} className='keen-slider groups-list-scroll'>
                {groupsChar.map(groupChar => {
                    return (
                        <li 
                            className={groupChar.group === selectedGroup ? 'keen-slider__slide group-selected' : 'keen-slider__slide group-list-item'} 
                            key={groupChar.id} 
                            onClick={() => setSelectedGroup(groupChar.group)}
                        >
                            <div className='box-group-item'>
                                <div className='group-content'>{groupChar.group}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}