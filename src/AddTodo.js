import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
          <form onSubmit={ this.handleSubmit }>
              <label htmlFor="">Add new todo</label>
              <input type="text" name="" id="" value={ this.state.content } onChange={ this.handleChange }/>
          </form>  
        );
    }
}

export default AddTodo;