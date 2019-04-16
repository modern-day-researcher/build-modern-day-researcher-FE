import React, { Component } from 'react'
import '../../App.css'

export class Input extends Component {
  render() {
    return (
      <div className='URLsearch'>
        <div className="ui icon input">
          <input type="text" placeholder="Add  A  URL  . . . " />
          <i class="plus circle icon"></i>
        </div>
        </div>
    ) 
  }
}

export default Input;