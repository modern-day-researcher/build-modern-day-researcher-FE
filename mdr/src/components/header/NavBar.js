import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';
import '../../App.css';


const NavBar = () => {
    return(
        <section className='nav-bar'>
          
            <div className='navbar'>
                <img src={Logo} className='logo' alt='r.ticle logo'/>
                    <NavLink exact to='/' className='link-wrap' activeClassName='activeNavButton' >Home</NavLink>
          
                
                    <NavLink to='/politics' className='link-wrap' activeClassName='activeNavButton' >Politics</NavLink>
         
                
                    <NavLink to='/tech' className='link-wrap' activeClassName='activeNavButton' >Tech</NavLink>

                
                    <NavLink to='/health' className='link-wrap' activeClassName='activeNavButton' >Health</NavLink>

                
                    <NavLink to='/business' className='link-wrap' activeClassName='activeNavButton'>Business</NavLink>
   
                
                    <NavLink to='/food' className='link-wrap' activeClassName='activeNavButton' >Food</NavLink>
 
                
                    <NavLink to='/art' className='link-wrap' activeClassName='activeNavButton' >Art</NavLink>

                
                    <NavLink to='/sports' className='link-wrap' activeClassName='activeNavButton' >Sports</NavLink>
           
                
                    <NavLink to='/video' className='link-wrap' activeClassName='activeNavButton' >Videos</NavLink>
         
            </div>
            <div class="ui action input">
                <input type="text" placeholder="Search..." />
                <select className="ui compact selection dropdown">
                    <option value="all">All</option>
                    <option selected="" value="articles">Articles</option>
                    <option value="products">Products</option>
                </select>
                <div className="ui button">Search</div>
            </div>
        </section>
    )
}

export default NavBar;