import React, { Component } from 'react'
import './assets/style/main.scss'
import Title from './components/TitleComponent'
import Input from './components/InputComponent'
import Button from './components/ButtonComponent'
import List from './components/list/ListComponent'
import Navbar from './components/navbar/NavbarComponent'

class App extends Component {
  state = {
    todos: ['list 1', 'list 2']
  }
  render () {
    return (
      <div className="App">
        <Navbar />
        <Title title='To do list'/>
        <Input type='text' placeholder='Type todo here !!!'/>
        <Button text='Add todo'/>
        <List list={this.state.todos}/>
      </div>
    )
  }
}

export default App
