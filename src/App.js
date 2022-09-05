import { Home } from './screens/Home';
import { MobileNavBar } from './components/MobileNavBar';
import { useState } from 'react';

function App() {
  const [selectedScrenn, setSelectedScrenn] = useState(1)
  return (
    <div className="App">
      <Home />



      <MobileNavBar selectedScrenn={selectedScrenn} setSelectedScrenn={setSelectedScrenn} />
    </div>
  );
}

export default App;
