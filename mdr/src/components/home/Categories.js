import React, { Component } from 'react';
import '../../App.css'

export class Categories extends Component {
  render() {
    return (
        <div className='cat-flex'>
            <h1 className='cat-head'>Add A Category!</h1>
            <div className='cat-wrap'>
                <button className='cat'> Health </button>
                <button className='cat'> Politics </button>
                <button className='cat'> Sports </button>
                <button className='cat'> Business </button>
                <button className='cat'> Art </button>
                <button className='cat'> Tech </button>
                <button className='cat'> Food </button>
                <button className='cat'> Music </button>
                <button className='cat'> Videos </button>
                <button className='cat'> Entertainment </button>
            </div>
         </div>
    )
  }
}

export default Categories;