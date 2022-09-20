import { Routes, Route } from 'react-router-dom';

import { Home } from './screens/Home';
import { Matches } from './screens/Matches';
import { Rank } from './screens/Rank';

export function Router() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/rank' element={<Rank />} />
            <Route path='/matches' element={<Matches />} />
        </Routes>
    )
}