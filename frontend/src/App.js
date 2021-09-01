import React from 'react';
import { Route } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import Districts from './pages/Districts';
import DistrictCourt from './pages/DistrictCourt';
import Choice from './pages/Choice';
import ListOfEvents from './pages/ListOfEvents'

class App extends React.Component {
  

  render() {
    return (
      <div className="app">
        {/* TODO: разобраться со слэшем  */}
        <Route path="/" exact component={StartPage} />
        <Route path="/districts/" exact component={Districts} />
        <Route path='/districts/*' exact component={DistrictCourt} />
        <Route path='/choice' exact component={Choice} />
        <Route path='/listofevents' exact component={ListOfEvents} />
      </div>
    );
  }
}

export default App;
