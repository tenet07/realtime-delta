import './App.css';
import { AppContextProvider } from './context/AppContext';
import { Data } from './Data.jsx';
import delta from './images/dex.png';

function App() {
  return (
    <div className="App">
      <p className="App-header">
        <img height="80" width="80" src={delta} /> <span>Delta Exchange</span> 
      </p>
      <AppContextProvider>
        <Data />
      </AppContextProvider>
    </div>
  );
}

export default App;