import React from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'
function App() {
  return (
    <div className="App">
      <div className="AppContainer">
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
