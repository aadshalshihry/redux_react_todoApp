import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from "../Actions/AddTodo";
import FormAddTodo from "../Components/FormAddTodo";

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      inputValue: ""
    }
  }

  addTodo(e){
    e.preventDefault();
    if(this.state.inputValue !== ""){
      this.props.dispatch(actions.incerId());
      let id = this.props.currentTodoId;
      this.props.dispatch(actions.addTodo(this.state.inputValue, id));
      this.setState({
        inputValue: ""
      });
    }
  }

  onValChange(e){
    this.setState({
      inputValue: e.target.value
    });
  }

  onChangeCheckbox(e, id){
    this.props.dispatch(actions.ToggelCompleted(id));
  }

  onEditClick(id){
    console.log(id);
  }

  render() {
    let printList = this.props.todos.map(todo =>
      <li
        key={todo.id}>
          <input
            onChange={(e) => {
              this.onChangeCheckbox(e, todo.id)
            }}
            type="checkbox"
            checked={this.props.todos[todo.id].completed}
             />
          {todo.task} <button onClick={() => {
            this.onEditClick(todo.id)
          }}>Edit</button>
      </li>
    )
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="AddTodo">
          <FormAddTodo
            addTodo={this.addTodo.bind(this)}
            inputValue={this.state.inputValue}
            onValChange={this.onValChange.bind(this)}
           />
          <button onClick={this.addTodo.bind(this)}>Add Todo</button>
          <ul>
            {printList}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    currentTodoId: state.currentTodoId
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
