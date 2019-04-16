import React from 'react';
import Input from './Input';
import Categories from './Categories';


class Home extends React.Component {
    render () {
        return (
            <div>
                <Input />
                <Categories />
            </div>
        )
    }
}

export default Home;