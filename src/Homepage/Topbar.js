import React from 'react';
import { CiSearch } from "react-icons/ci";
import { BsFillPersonFill ,BsFillBellFill,BsFillChatRightTextFill} from "react-icons/bs";
import "./Topbar.css";
class Topbar extends React.Component{
    render(){
        return(
            <div>
                <div className='topbarContainer'>
                  <div className='topbarLeft'>
                    <span className='logo'>SpaceBook</span>
                  </div>
                  <div className='topbarCenter'>
                    <div className='searchbar'>
                    <CiSearch className='searchIcon'/>
                    <input className='searchInput' placeholder='search 
                    for friend or posts'/>
                    </div>
                  </div>
                  <div className='topbarRight'>
                    <div className='topbarLinks'>
                      <span className='topbarlink'>Homepage</span>
                      <span className='topbarlink'>Timeline</span>
                    </div>
                    <div className='topbarIcons'>
                      <div className='topbarIconItem'><BsFillPersonFill/>
                      <span className='topbarIconBadge'>6</span>
                      </div>
                      <div className='topbarIconItem'><BsFillChatRightTextFill/>
                      <span className='topbarIconBadge'>28</span>
                      </div>
                      <div className='topbarIconItem'><BsFillBellFill/>
                      <span className='topbarIconBadge'>56</span>
                      </div>
                      </div>

                      <img src="kohli.jpg" alt="Kholi" className='topbarImg'/>
                  </div>
                </div>
            </div>
        )
    }
}

export default Topbar;