import React from "react";
import { makeData, Logo, Tips } from "./Utils";
import _ from 'lodash'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class AggregateTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
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
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age",
                  aggregate: vals => _.round(_.mean(vals)),
                  Aggregated: row => {
                    return (
                      <span>
                        {row.value} (avg)
                      </span>
                    );
                  }
                },
                {
                  Header: "Visits",
                  accessor: "visits",
                  aggregate: vals => _.sum(vals)
                }
              ]
            }
          ]}
          pivotBy={["firstName", "lastName"]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}