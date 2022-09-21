import './style.css';
const data = [
    {id: 1, name: 'Catar', points: 20, ar: 23, ra: 6, ja: 5},
    {id: 2, name: 'Equador', points: 18, ar: 24, ra: 2, ja: 5},
    {id: 3, name: 'Holanda', points: 16, ar: 22, ra: 3, ja: 3},
    {id: 4, name: 'Senegal', points: 16, ar: 20, ra: 2, ja: 2},
];

export function Table() {
    return (
        <div className='content-table'>
            <table>
                <tr className='table-header'>
                    <th className='team' title='Seleção'>Seleção</th>
                    <th className='p' title='Pontos'>P</th>
                    <th className='j' title='Jogos'>J</th>
                    <th className='v' title='Vitórias'>V</th>
                    <th className='e' title='Empates'>E</th>
                    <th className='d' title='Derrotas'>D</th>
                </tr>
                {data.map((line, index) => {
                    return (
                        <tr className='data-line' style={{backgroundColor: index <= 1 ? 'var(--green-100)' : ''}}>
                            <td className='data-classification'>
                                <span>{index + 1}°</span>
                                <span><b>{line.name}</b></span>
                            </td>
                            <td className='data-points classification-stats'>{line.points}</td>
                            <td className='classification-stats'>{line.ar}</td>
                            <td className='classification-stats'>{line.ra}</td>
                            <td className='classification-stats'>{line.ja}</td>
                            <td className='classification-stats'>{line.ja}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}