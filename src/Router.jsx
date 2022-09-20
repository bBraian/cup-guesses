import { Routes, Route } from 'react-router-dom';

import { Home } from './screens/Home';
import { Rank } from './screens/Rank';

export function Router() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/rank' element={<Rank />} />
        </Routes>
    )
}