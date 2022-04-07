import React, { Component } from 'react'
import "./assets/error.scss"
import logo from './assets/logo.gif'
export default class Error extends Component {
  render() {
    return (
      <div className='error'>
        <img src={logo}/>
        <img src=""/>
      </div>
    )
  }
}
