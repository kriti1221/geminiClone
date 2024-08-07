import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

function ContextProvider (props){

    const [input , setInput] = useState("");
    const [loading , setLoading] = useState(false);
    const [recentPrompt , setRecentPrompt] = useState("");
    const [prevPrompts  , setPrevPrompts] = useState([]);
    const [showResult , setShowResult] = useState(false);
    const [result , setResult] = useState("");  

    async function onSent(prompt){
        await run(prompt);
    }

    const contextValue = {
        onSent,
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
        setResult
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;