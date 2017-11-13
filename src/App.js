import React, { Component } from 'react'
import './assets/style/main.scss'
import Title from './components/TitleComponent'
import Input from './components/InputComponent'
import Button from './components/ButtonComponent'
import List from './components/list/ListComponent'
import Navbar from './components/navbar/NavbarComponent'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Title title='To do list'/>
        <Input type='text' placeholder='Type todo here !!!'/>
        <Button text='Add todo'/>
        <List />
      </div>
    )
  }
}

export default App
