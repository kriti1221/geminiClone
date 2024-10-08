import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';


function Main () {
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

  return (
    
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src ={assets.user_icon} alt=''/>
        </div>
        <div className="main-container">
            {!showResult
            ?
            <>
             <div className="greet">
                <p><span>Hello</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card" onClick={() =>
                    onSent("Suggest beautiful places to see on an upcoming road trip")
                }>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
                <div className="card" onClick={ () => onSent("Briefly summarize this concept: urban planning")}>
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt=''/>
                </div>
                <div className="card" onClick={() => onSent("Brainstorm team bonding activities for our work retreat")}>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt=''/>
                </div>
                <div className="card" onClick={() => onSent("Tell me about React js and React native")}>
                    <p>Tell me about React js and React native</p>
                    <img src={assets.code_icon} alt=''/>
                </div>

                </div>
            </>
            :
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt=''/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src = {assets.gemini_icon} alt=''/>
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p>{result}</p>
                    }
                </div>
                
            </div>
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter prompt here" value = {input} onChange={(e) => setInput(e.target.value)}/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img src={assets.send_icon} alt="" onClick = { () => {
                            setRepeated(false);
                            onSent(input);
                             }}/>:null}
                    </div>
                </div>
                <p className= "bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps   
                </p>


            </div>
        </div>
    </div>
  )
}

export default Main
