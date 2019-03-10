import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubTable from './SubTable';
import PivotTable from './PivotTable';
import AggregateTable from './AggregateTable';
import NestedJSONTable from './NestedJSONTable';
import { data1, data2, data3 } from './data';
// import NestedJsonTableExample from './NestedJsonTableExample';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NestedJSONTable data={data1} expandAll={true} />
          <img src={logo} className="App-logo" alt="logo" />
          <SubTable/>
          <br />
          <PivotTable/>
          <img src={logo} className="App-logo" alt="logo" />
          <AggregateTable/>
      </div>
    );
  }
}

export default App;
