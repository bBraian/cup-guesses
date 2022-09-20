import { MobileNavBar } from './components/MobileNavBar';
import { useState } from 'react';
import { Router } from './Router';

import { BrowserRouter } from 'react-router-dom';

function App() {
  const [selectedScrenn, setSelectedScrenn] = useState(1)
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        <MobileNavBar selectedScrenn={selectedScrenn} setSelectedScrenn={setSelectedScrenn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
