import React, { Component } from 'react';

export class ListToDo extends Component {
  getChecked = (e, data) => {
    this.props.getchecked(e, data);
  };

  render() {
    let Items = this.props.input;

    let checkeditems = this.props.input.filter(
      (data) => data.isSelected === true
    );

    if (+this.props.onBtnClick === 1) {
      Items = this.props.input;
    }
    if (+this.props.onBtnClick === 2) {
      Items = checkeditems;
      console.log(Items);
    }
    if (+this.props.onBtnClick === 3) {
      Items = this.props.input.filter((data) => data.isSelected === false);
    }

    let todoList = Items.map((data, index) => {
      return (
        <div
          className="map-items d-flex justify-content-between w-100"
          key={index}
        >
          <div className="form-check ml-5">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => this.getChecked(e, index)}
              checked={data.isSelected===true}
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              style={{
                textDecoration: data.isSelected===true
                  ? 'line-through'
                  : 'none',
              }}
            >
              {data.name}
            </label>
          </div>
          <div>
            <button
              className="btn btn-success m-2"
              onClick={() => this.props.onBtnEdit(index)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onBtnDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return <div className="todo-list">{todoList}</div>;
  }
}

export default ListToDo;
