import './Sidebar.css';
import { assets } from '../../assets/assets';
import {useContext, useState} from 'react';
import { Context } from '../../context/Context';

function Sidebar() {
    const [collapse , setCollapse] = useState(false);
    const {onSent,
        prevPrompts,
        setPrevPrompts,
        recentPrompt,
        setRecentPrompt,
        input,
        setInput,
        loading,
        setLoading,
        showResult,
        setShowResult,
        result,
        setResult,
        repeated,
        setRepeated} = useContext(Context);

    function backToPrev(){
        setLoading(false);
        setShowResult(false);
        setPrevPrompts([]);
        setRecentPrompt("");
    }

  return (
    <div className='sidebar'>
      <div className="top" >
        <img onClick = {() => setCollapse((collapse) => !collapse) } className= "menu" src = {assets.menu_icon} alt=''/>
        <div className='new-chat' onClick={()=>backToPrev()}>
            <img src = {assets.plus_icon} alt=''/>
            {collapse?<p>New Chat</p>:null}
        </div>
        {collapse ?
        <div className="recent">
            <p className="recent-title">Recent</p>
           
            { prevPrompts?.map((item) => {
                return (
                    <div className = "recent-entry" onClick={() => {
                        setRepeated(true);
                        onSent(item)}}>
                            {!repeated?
                        <> <img src = {assets.message_icon} alt='' />:
                        <p>{item.slice(0,18)}</p></>:null}
                    </div>
                )
            })}
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
