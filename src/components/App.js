import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      input: [],
      btnAdd: false,
      onBtnClick: null,
      btnDelete: null,
      // filterInput: [],
    };
  }

  getBtnAdd = (e) => {
    this.setState({
      btnAdd: e,
    });
  };

  // filterInput = () => {
  //   this.setState({
  //     filterInput:
  //   })
     
  //   // return filterInput

  // };
  

  onBtnEdit = (index) => {
    this.setState({
      input: this.state.input.map((data, i) => {
        if (data.isEditMode === true) {
          return {
            ...data,
            isEditMode: false,
          };
        }
        return {
          ...data,
          isEditMode: index === i ? true : data.isEditMode,
        };
      }),
    });
  };

  onBtnDelete = (e) => {
    this.setState({
      input: this.state.input.filter((data, index) => index !== e),
    });
  };

  onBtnClickId = (id) => {
    this.setState({
      onBtnClick: id,
    });
  };

  getNoteInput = (e) => {
    this.setState({
      input: [
        ...this.state.input,
        { name: e, isSelected: false, isEditMode: false },
      ],
    });
  };

  getchecked = (e, index) => {
    console.log(e);
    this.setState({
      input: this.state.input.map((data, i) => {
        return {
          ...data,
          isSelected: index === i ? e.target.checked : data.isSelected,
        };
      }),
    });
  };

  render() {
    console.log(this.state.filterInput);
    return (
      <div className="container main-card">
        <Header />
        <div>
          <Section
            getNoteInput={this.getNoteInput}
            btnAdd={this.state.btnAdd}
            input={this.state.input}
            getchecked={this.getchecked}
            checked={this.state.checked}
            onBtnClick={this.state.onBtnClick}
            getBtnAdd={this.getBtnAdd}
            onBtnEdit={this.onBtnEdit}
            getBtnEdit={this.state.btnEdit}
            onBtnDelete={this.onBtnDelete}
          />
        </div>

        <Footer onBtnClickId={this.onBtnClickId} getBtnAdd={this.getBtnAdd} />
      </div>
    );
  }
}

export default App;
