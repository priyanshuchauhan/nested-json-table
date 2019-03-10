import React from "react";
import { makeData } from "./Utils";
import { isObject } from 'lodash';
import { data1, data2, data3 } from './data';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class SubTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
      // data: data1
    };
  }

  /**
   * TODO: Also allow array
   */
  processDeepObject = (originalData) => {
    const deepObjectKeys = Object.keys(originalData).filter(topKeys => {
      if (isObject(originalData[topKeys]) || Array.isArray(originalData[topKeys])) {
        return topKeys;
      }
    })
    if (deepObjectKeys.length === 0) {
      return { deepData: [], subColumns: [] };
    }
    console.log('##originalData', originalData)
    console.log('##deepObjectKeys', deepObjectKeys)

    let subColumnsList = [];

    const deepData = deepObjectKeys.map(deepObjectKey => {
      if (!isObject(originalData[deepObjectKey]) || Array.isArray(originalData[deepObjectKey])) {
        return originalData[deepObjectKey]
      }
      Object.keys(originalData[deepObjectKey]).map(deeperrObjectKey => {
        subColumnsList.push({
            Header: deepObjectKey,
            accessor: deeperrObjectKey
          })
      });
      return originalData[deepObjectKey]
    });
    
    let subColumns = [{
      Header: "SubColumn",
      columns: subColumnsList
    }];

    console.log('##deepData', deepData)
    console.log('##subColumns', subColumns)
    return { deepData, subColumns };
  }

  render() {
    const { data } = this.state;
    console.log('##SubComponent zero', data[0]);
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"

          SubComponent={row => {
            const { deepData, subColumns } = this.processDeepObject(row.original);
            return (
              <div>
                <ReactTable
                  data={ deepData }
                  className="-striped -highlight"
                  defaultPageSize={3}
                  columns={ subColumns }
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}