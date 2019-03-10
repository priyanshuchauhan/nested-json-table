import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PivotTable from './PivotTable';
import AggregateTable from './AggregateTable';
// import NestedJsonTableExample from './NestedJsonTableExample';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <AggregateTable/>
          <PivotTable/>
      </div>
    );
  }
}

export default App;
