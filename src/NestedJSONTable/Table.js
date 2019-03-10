import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonNode from './JsonNode';

/*
 *  @description Child node table creator
 */
export default class Table extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    parentKey: PropTypes.string,
    expandAll: PropTypes.bool
  }

  static defaultProps = {
    parentKey: 'root'
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
    * @reference jQuery.makeArray
  **/
  makeArray(arr, results) {
    var ret = results || [];

    if (arr != null) {
      if (this.isArray(Object(arr))) {
        Object.assign(ret, typeof arr === "string" ? [arr] : arr);
      } else {
        [].push.call(ret, arr);
      }
    }

    return ret;
  }

  /**
    * @reference underscore.isObject
  **/
  isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

  isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  // create object if value is not object or array
  ensureChildIsObject(data) {
    for (const k in data) {
      let ty = typeof data[k];
      
      if (ty.search(/^string|number|boolean|function$/i) != -1) {
        const r = {
          [`${data.length.toString()} items`]: data[k]
        };
        data[k] = r;
      }
    }
  }

  // create array from object for each member in an array
  makeArrayForEach(data) {
    return data.map(child => {
      if (this.isObject(child)) {
        return this.makeArray(child);
      }
      return child;
    });
  }
 
  // make sure the passed in data property is an array
  ensureChildIsArray(data) {
    if (!this.isArray(data)) {
      return [data];
    }
    return data;
  }

  render() {
    const { data, parentKey, expandAll } = this.props;
    
    this.ensureChildIsObject(data);

    let header = [];
    let rows = [];
    Object.keys(data[0]).forEach(d => header.push(<th key={Math.random()}>{isNaN(d) ? d : 'collection'}</th>));
    
    data.forEach((child, i) => {
      let curRow = [];        
      for (const key in child) {
        const obj = child[key];
        const childKey = `${parentKey}/${i}/${key}`;

        let o = [];
        if (this.isObject(obj)) {
          o = this.makeArray(obj);
        }
        let newChild = [];
        if (this.isArray(obj) && obj.length > 0) {
          // if a collection is a variant, make the object an array (ie. const node = [{ 1, "2", { "variant": 3.0 } }])
          const modifiedArray = this.makeArrayForEach(obj);          
          newChild.push(
            <td key={Math.random()}>
              <JsonNode path={childKey} data={modifiedArray} expandAll={expandAll} />          
            </td>);
        } else {
          if (o.length > 0) {
            newChild.push(<td key={Math.random()}>
              <JsonNode path={childKey} data={o} expandAll={expandAll} />            
            </td>);
          } else {
            newChild.push(<td key={Math.random()}>{obj ? obj.toString() : ''}</td>);
          }
        }
        curRow.push(newChild);
      }
      rows.push(<tr key={Math.random()}>{curRow}</tr>);
    });

    return (
      <table><thead><tr>{header}</tr></thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}