import './App.css';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import CreateNotes from './components/CreateNotes/CreateNotes'
import GetNotes from './components/GetNotes/GetNotes';

function App() {
  return (
   <div>
     <header>
       <Navigation />
     </header>
     <main>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/login"> 
        <Login />
      </Route>
      <Route exact path="/createnotes">
        <CreateNotes />
      </Route>
      <Route exact path="/getnotes">
        <GetNotes />
      </Route>
    </Switch>
    </main> 
   </div>
  );
}

export default App;
