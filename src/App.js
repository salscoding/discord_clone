import React from 'react';
import Chat from './Chat';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* SideBar Section */}
      <Sidebar />
      {/* Chat Section */}
      <Chat />
    </div>
  );
}

export default App;