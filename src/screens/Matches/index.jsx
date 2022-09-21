import { useState } from 'react';
import { GroupsList } from './components/GroupsList';
import { Table } from './components/Table';
import './style.css';

export function Matches() {
    const [selectedGroup, setSelectedGroup] = useState('A');
    return (
        <div className="matches">

            <GroupsList selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />

            <div className='matches-content'>
                <Table />

            </div>

        </div>
    )
}