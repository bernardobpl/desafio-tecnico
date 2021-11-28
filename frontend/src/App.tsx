import React from 'react';
import './App.css';
import { SideMenu } from './Components/SideMenu';
import { UserList } from './Components/UserList/UserList';

const App = () => {
  return (
    <div className="App">
      <SideMenu />
      <UserList />
    </div>
  );
}

export default App;
