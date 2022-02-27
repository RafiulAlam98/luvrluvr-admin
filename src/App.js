import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route exact path='/login'>
           <Login></Login>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
