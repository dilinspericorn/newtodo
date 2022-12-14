import React, { Component } from 'react';

export class FormSubmit extends Component {
  state = {
    input: '',
    editInput: '',
    filterInput: [],
  };

  getInput = (e) => {
    if (this.props.btnAdd) {
      this.setState({
        input: e.target.value,
      });
    }
    if (this.state.filterInput.length>0) {
      this.setState({
        editInput: e.target.value,
      });
    }
  };

  // getEditInput = (e) => {

  // };

  submitForm = (e) => {
    e.preventDefault();

    this.props.btnAdd
      ? this.props.getNoteInput(this.state.input)
      : this.props.getNoteInput(this.state.editInput);
    this.setState({
      input: '',
    });
    this.props.getBtnAdd(false);
  };

  onEditCheck = () => {
    let filterInput = this.props.input
      .filter((data) => data.isEditMode === true)
      .map((data) => data.name);

    return filterInput;
  };

  render() {
    let filterInput = [];
    filterInput = this.props.input.filter((data) => data.isEditMode === true);
    return (
      <form onSubmit={this.submitForm}>
        {this.props.btnAdd || filterInput.length > 0 ? (
          <div className="container mt-5 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add Notes"
              onChange={this.getInput}
              // value={this.state.input}
              value={
                filterInput.length > 0 ? this.state.editInput : this.state.input
              }
            />
          </div>
        ) : null}
      </form>
    );
  }
}

export default FormSubmit;
