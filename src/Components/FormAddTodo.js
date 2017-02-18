import React, { Component } from "react";

export default class FormAddTodo extends Component {
  render(){
    return (
      <form
      onSubmit={this.props.addTodo}>
        <input
        value={this.props.inputValue}
        onChange={this.props.onValChange}
        />
      </form>
    )
  }
}
