import React from 'react';
import Topbar from './Topbar';
import Rightbar from './Rightbar';
import Centerbar from './Centerbar';
import Leftbar from './Leftbar';
import './home.css';

class Home extends React.Component{
    render(){
        return(
            <>
            <div>
                <Topbar/>
            </div>
            <div className='homeContainer'>
                <Leftbar/>
                <Centerbar/>
                <Rightbar/>
            </div>
            </>
        )
    }
}

export default Home;