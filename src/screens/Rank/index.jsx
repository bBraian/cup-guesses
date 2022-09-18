import './style.css';
import golden from '../../assets/images/gold.gif';
import silver from '../../assets/images/silver.gif';
import bronze from '../../assets/images/bronze.gif';

export function Rank() {
    const data = [
        {id: 1, name: 'Braian', points: 20, ar: 23, ra: 6, ja: 5},
        {id: 2, name: 'Rat', points: 18, ar: 24, ra: 2, ja: 5},
        {id: 3, name: 'Djow', points: 16, ar: 22, ra: 3, ja: 3},
        {id: 4, name: 'Ratazana', points: 16, ar: 20, ra: 2, ja: 2},
        {id: 5, name: 'Pampi', points: 10, ar: 22, ra: 1, ja: 2},
        {id: 6, name: 'Ratiranda', points: 3, ar: 6, ra: 0, ja: 1},
    ];

    const positionAttributes = [
        {id: 1, color: golden, icon: '🏆', text: '#ffff'},
        {id: 2, color: silver, icon: '🥈', text: '#dbdbdb'},
        {id: 3, color: bronze, icon: '🥉', text: '#ff9b39'},
    ]

    return (
        <div className='rank'>

            <div className='content-table'>
                <table>
                    <tr className='table-header'>
                        <th className='classification' title='Classificação'>Classificação</th>
                        <th className='points' title='Pontos'>Points</th>
                        <th className='ar' title='Apostas realizadas'>AR</th>
                        <th className='ra' title='Resultados acertados'>RA</th>
                        <th className='ja' title='Jogos acertados'>JA</th>
                    </tr>
                    {data.map(line => {
                        return (
                            <tr className={`data-line ${line.id <= 3 ? 'winners' : ''}`} 
                                style={{
                                    backgroundImage: line.id <= 3 ? `url(${positionAttributes[line.id - 1].color})` : 'white',
                                    color: line.id <= 3 ? positionAttributes[line.id - 1].text : '#222222',
                                }}
                            >
                                <td className='data-classification'>
                                    <span>{line.id}</span>
                                    <span>{line.name}</span>
                                    <span>{ line.id <= 3 ? positionAttributes[line.id - 1].icon : ""}</span>
                                </td>
                                <td className='data-points text-center'>{line.points}</td>
                                <td className='data-ar text-center'>{line.ar}</td>
                                <td className='data-ra text-center'>{line.ra}</td>
                                <td className='data-ja text-center'>{line.ja}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>
    );
}