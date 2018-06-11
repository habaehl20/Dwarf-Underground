import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import HammerAd from './HammerAd'
import Body from './Body'
import ClickBait from './ClickBait'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
              <Header />
            <h1>Dwarf-underground</h1>
              <body> 
              <main className="expanded row">
                < Body/>
            {/* add for the last hammer  */}
            < HammerAd />

            {/* Click bait ads at the bottom of the page */}
            < ClickBait/>
          </main>

          < Footer/>

          
        </body>
      </div>
    );
  }
}

export default App;
