import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Table from './Table';

/* http://unicode-table.com/en/sets/arrows-symbols/ */
const glyphArrowUp = '\u25B2';
const glyphArrowDown = '\u25BC';
const glyphArrowRight = '\u25B6';

export default class JsonNode extends Component {
  static propTypes = {
    data: PropTypes.any,
    path: PropTypes.string,
    expandAll: PropTypes.bool
  }

  constructor(props) {
    super(props);
    const {path, expandAll} = props;

    const newState = { [path]: { display: {'divCollapsible--hide': expandAll ? false : true}, spanGlyph: {'spanGlyph--expand': true}, expander: expandAll ? glyphArrowDown : glyphArrowRight } };
    this.state = Object.assign(newState, {expanded: expandAll || false});    
  }

  handleClick(id) {
    if (!this.state.expanded) {
      this.setState({[id]: { display: {'divCollapsible--hide': false}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowDown }});
    } else {
      this.setState({[id]: { display: {'divCollapsible--hide': true}, spanGlyph: {'spanGlyph--expand': true}, expander: glyphArrowRight }});
    }
    this.setState({ expanded: !this.state.expanded });    
  }

  render() {
    const { data, path, expandAll } = this.props;

    return (
      <div>
      <span className={classNames(this.state[path].spanGlyph)} onClick={this.handleClick.bind(this, path)}>{this.state[path].expander}</span>{' '}
        <div className={classNames(this.state[path].display)} >
          <Table data={data} parentKey={path} expandAll={expandAll} />
        </div>              
      </div>
    );
  }
}