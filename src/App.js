import React from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';

function App() {
  return (
    <div className="app">
    {/* Header */}
      <Header />
    {/* App Body */}
    <div className="app__body">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      <Widgets/>
    </div>


    </div>
  );
}

export default App;
