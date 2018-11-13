import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Search extends Component {
   constructor(props) {
       super(props);
       this.state={};
       this.handleChange = this.handleChange.bind(this);
   }
   handleChange = (ev)=> {
       this.props.textChange(ev.target.value);
   }

  render() {
    return (
      <div>
        <div className="qury">
        <input type="text" onChange={ this.handleChange } className="inpt" />
        </div>
      </div>
    )
  }
}

Search.Prototype = {
    textChange : PropTypes.func,

}