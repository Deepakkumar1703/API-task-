import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact to="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
