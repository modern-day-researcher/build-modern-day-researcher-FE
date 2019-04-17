import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';
import '../../App.css';


class NavBar extends React.Component {

    logOut = () => {
        localStorage.removeItem("token");
        this.props.checkSignIn();
        this.props.history.push("/sign-in");
    };
    
    render () {
        return (
            <section className='nav-bar'>
            
                <div className='navbar'>
                    <img src={Logo} className='logo' alt='r.ticle logo'/>
                    <NavLink exact to='/' className='link-wrap' activeClassName='activeNavButton' >Home</NavLink>


                    <NavLink exact to='/all' className='link-wrap' activeClassName='activeNavButton' >All</NavLink>
            
                
                    <NavLink to='/politics' className='link-wrap' activeClassName='activeNavButton' >Politics</NavLink>
            
                
                    <NavLink to='/tech' className='link-wrap' activeClassName='activeNavButton' >Tech</NavLink>

                
                    <NavLink to='/health' className='link-wrap' activeClassName='activeNavButton' >Health</NavLink>

                
                    <NavLink to='/business' className='link-wrap' activeClassName='activeNavButton'>Business</NavLink>

                
                    <NavLink to='/food' className='link-wrap' activeClassName='activeNavButton' >Food</NavLink>

                
                    <NavLink to='/art' className='link-wrap' activeClassName='activeNavButton' >Art</NavLink>

                
                    <NavLink to='/sports' className='link-wrap' activeClassName='activeNavButton' >Sports</NavLink>
            
                
                    <NavLink to='/videos' className='link-wrap' activeClassName='activeNavButton' >Videos</NavLink>


                    <NavLink to='/entertainment' className='link-wrap' activeClassName='activeNavButton' >Entertainment</NavLink>

                    
                    <NavLink to='/sign-up' className='sign'>Sign Up</NavLink>


                    <NavLink to='/sign-in' className='sign' onClick={this.logOut} >Log Out</NavLink>
            
                </div>
            </section>
         )   
    }

}

export default NavBar;