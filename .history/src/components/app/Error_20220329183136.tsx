import React, { Component } from 'react'
import "./assets/error.scss"
import logo from './'
export default class Error extends Component {
  render() {
    return (
      <div className='error'>
        <img src={logo}/>
      </div>
    )
  }
}
