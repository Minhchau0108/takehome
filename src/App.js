import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopSaleList from './components/TopSaleList';

function App() {
  return (
    <div className="App d-flex justify-content-center mt-5" data-test="app">
      <TopSaleList data-test="list"/>
    </div>
  );
}

export default App;
