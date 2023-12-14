import './App.css';
import StandingsList from './components/StandingsList';
import Options from './components/Tabs.jsx';

function App() {
  return (
    <div>
      <div>
        <h1>Premier League</h1>
        <StandingsList />
        <Options />
      </div>
    </div>
  );
}

export default App;
