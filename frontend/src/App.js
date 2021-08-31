import React from 'react';
import { Route } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import Districts from './pages/Districts';
import DistrictCourt from './pages/DistrictCourt'
import { SAOAddresses, SVAOAddresses, SZAOAddresses } from './consts'

class App extends React.Component {
  

  render() {
    return (
      <div className="app">
        {/* TODO: разобраться со слэшем  */}
        <Route path="/" exact component={StartPage} />
        <Route path="/districts/" exact component={Districts} />
        <Route path='/districts/*' exact component={DistrictCourt} />
      </div>
    );
  }
}

export default App;
