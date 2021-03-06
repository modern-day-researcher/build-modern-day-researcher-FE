import React, { Component } from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { addLink } from '../../actions';
import '../../App.css'

export class Input extends Component {
    state = {
        link: {
            url: '',
            category: '',
            user_id: '',
            is_read: false      
        }
    }
    //  const {link} = this.state;

    submitHandler = () => {
         this.props.addLink(this.state.link)
        //  .then (() => this.props.history.push(`/${this.state.link.category}`))
          this.setState({
            url: '',
            category: '',
            username: ''
        }) 
        // this.props.history.push(`/${this.state.category}`)
    }

    handleURLChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleUserChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    clickHealth = event => {
        event.preventDefault();
        this.setState({
        category: 'health'
        })
    }

    clickPolitics = event => {
        event.preventDefault();
        this.setState({
        category: 'politics'
        })
    }

    clickSports = event => {
        event.preventDefault();
        this.setState({
        category: 'sports'
        })
    }

    clickBusiness = event => {
        event.preventDefault();
        this.setState({
        category: 'business'
        })
    }

    clickArt = event => {
        event.preventDefault();
        this.setState({
        category: 'art'
        })
    }

    clickTech = event => {
        event.preventDefault();
        this.setState({
        category: 'tech'
        })
    }

    clickFood = event => {
        event.preventDefault();
        this.setState({
        category: 'food'
        })
    }

    clickMusic = event => {
        event.preventDefault();
        this.setState({
        category: 'music'
        })
    }

    clickVideos = event => {
        event.preventDefault();
        this.setState({
        category: 'videos'
        })
    }

    clickEntertainment = event => {
        event.preventDefault();
        this.setState({
        category: 'entertainment'
        })
    }

  render () {
    return (
        <div className='all-page'>
            <div className='URLsearch'>
              <h1 className='cat-head'>Step One: Add A Url</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Please enter a URL!</label>
                    <input
                        name='url'
                        value={this.state.url}
                        placeholder='Add  A  URL . . .'
                        onChange={this.handleURLChange}
                        className='cat-input'
                    >
                    
                    </input>
                    <h1 className='cat-head'>Step Two: Who's profile are we adding this to? </h1>
                    <label>This can be your username or the username of a friend.</label>
                    <input
                        name='username'
                        value={this.state.link.username}
                        placeholder='Add  A Username . . .'
                        onChange={this.handleUserChange}
                        className='cat-input'
                    >
                    
                    </input>
                </form>
            </div>
               <div className='cat-flex'>
            <h1 className='cat-head'>Step Three: Add A Category!</h1>
            <div className='cat-wrap'>
                <button className='cat' onClick={this.clickHealth}> Health </button>
                <button className='cat' onClick={this.clickPolitics}> Politics </button>
                <button className='cat' onClick={this.clickSports}> Sports </button>
                <button className='cat' onClick={this.clickBusiness}> Business </button>
                <button className='cat' onClick={this.clickArt}> Art </button>
                <button className='cat' onClick={this.clickTech}> Tech </button>
                <button className='cat' onClick={this.clickFood}> Food </button>
                <button className='cat' onClick={this.clickMusic}> Music </button>
                <button className='cat' onClick={this.clickVideos}> Videos </button>
                <button className='cat' onClick={this.clickEntertainment}> Entertainment </button>
            </div>
         </div>     
         <button className='sumbitURL' onClick={this.submitHandler}>Submit!</button>
            <Card 
            url={this.state.link.url} 
            category={this.state.link.category}
            user_id={this.state.link.user_id}
            is_read={this.state.link.is_read}
            />
        </div>
    )
  }
}


export default connect (
    null,
   { addLink }
)(Input);

// export default Input;
