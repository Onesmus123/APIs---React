import React from 'react';
import UserList from './UserList';
import Header from './Header';
import Footer from './Footer';
import './App.css'; // For global styles

function App() {
  return (
    <div className="App">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
