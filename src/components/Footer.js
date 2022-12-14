import React, { Component } from 'react';
import FilterContent from './FilterContent';

export class Footer extends Component {
  btnAdd = (e) => {
    this.props.getBtnAdd(true);
  };
  render() {
    return (
      <div className="footer">
        <button
          className="btn btn-primary btn-sm m-3"
          onClick={(e) => this.btnAdd(e)}
        >
          Add
        </button>
        <FilterContent onBtnClickId={this.props.onBtnClickId} />
      </div>
    );
  }
}

export default Footer;
