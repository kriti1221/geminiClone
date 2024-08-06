import './Sidebar.css';
import { assets } from '../../assets/assets';
import {useState} from 'react';

function Sidebar() {
    const [collapse , setCollapse] = useState(false);

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick = {() => setCollapse((collapse) => !collapse) } className= "menu" src = {assets.menu_icon} alt=''/>
        <div className='new-chat'>
            <img src = {assets.plus_icon} alt=''/>
            {collapse?<p>New Chat</p>:null}
        </div>
        {collapse ?
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className = "recent-entry">
                <img src = {assets.message_icon} alt='' />
                <p>What is react...</p>
            </div>
        </div>
        :null}
      </div>
      <div className="bottom">
        <div className = "bottom-item recent-entry">
            <img src = {assets.question_icon} alt=''/>
            {collapse?<p>Help</p>:null }
        </div>
        <div className = "bottom-item recent-entry">
            <img src = {assets.history_icon}/>
            {collapse?<p>Activity</p>:null}
        </div>
        <div className = "bottom-item recent-entry">
            <img src = {assets.setting_icon}/>
            {collapse?<p>Settings</p>:null}
        </div>

      </div>
    </div>
  )
}

export default Sidebar
