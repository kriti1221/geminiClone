import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

function ContextProvider (props) {

    const [input , setInput] = useState("");
    const [loading , setLoading] = useState(false);
    const [recentPrompt , setRecentPrompt] = useState("");
    const [prevPrompts  , setPrevPrompts] = useState([]);
    const [showResult , setShowResult] = useState(false);
    const [result , setResult] = useState(""); 
    const [repeated, setRepeated] = useState(false);

    async function onSent(prompt){
        setLoading(true);
        setRecentPrompt(prompt);
        setInput(prompt);
        if(!repeated){
        setPrevPrompts([...prevPrompts,prompt]);
        }
        setRepeated(false);
        setShowResult(true);
        setResult("");
        const response = await run(prompt);
        let newResponse = response.split("**").join(<br/>)
        setResult(newResponse);
        setLoading(false);
        setInput("");
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
        setResult,
        repeated,
        setRepeated
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;