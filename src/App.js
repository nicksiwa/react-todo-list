import React, { Component } from 'react'
import './assets/style/main.scss'
import Title from './components/TitleComponent'
import Input from './components/InputComponent'
import List from './components/list/ListComponent'
import Navbar from './components/navbar/NavbarComponent'

class App extends Component {
  state = {
    todos: ['list 1', 'list 2']
  }
  addTodo = (text) => {
    const {todos} = this.state
    this.setState({
      todos: [text, ...todos]
    })
  }
  removeTodo = (index) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter((todo, i) => i !== index)
    })
  }
  render () {
    return (
      <div className="App">
        <Navbar />
        <Title title='To do list'/>
        <Input placeholder='Type todo here !!!' onSubmit={this.addTodo}/>
        <List list={this.state.todos} onDelete={this.removeTodo}/>
      </div>
    )
  }
}

export default App
