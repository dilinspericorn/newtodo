import React, { Component } from 'react';
import FormSubmit from './FormSubmit';
import ListToDo from './ListToDo';

export class Section extends Component {
  render() {
    return (
      <div className="section">
        {this.props.btnAdd || this.props.input.length > 0 ? null : (
          <div>No Items Added</div>
        )}

        <FormSubmit
          getNoteInput={this.props.getNoteInput}
          getBtnAdd={this.props.getBtnAdd}
          getBtnEdit={this.props.getBtnEdit}
          btnAdd={this.props.btnAdd}
          input={this.props.input}
        />

        {this.props.input.length < 0 ? null : (
          <div className="container m-3 list-todo">
            <ListToDo
              checked={this.props.checked}
              getchecked={this.props.getchecked}
              input={this.props.input}
              onBtnClick={this.props.onBtnClick}
              onBtnEdit={this.props.onBtnEdit}
              onBtnDelete={this.props.onBtnDelete}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Section;
