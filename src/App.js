import React, {createContext, useEffect, useState} from "react";
import './App.css';
import ContentTheme from "./components/light dark";



export const ThemeContent = createContext(null);

function App() {
    const [theme,setTheme] = useState(false)
    const handeleClick = ()=>{
        setTheme(!theme)
    }

    useEffect(()=>{
        if (theme === true)
             document.body.classList.add("dark");
        else {
             document.body.classList.remove("dark");
        }
        },[theme])
    return (
        <ThemeContent.Provider>
            <div className='theme'>
                <h1 className='text-content'>Light Dark Theme</h1>
                <div className='toggleSwitch'>
                 <button onClick={handeleClick} id= 'switch'>
                    <div className='left'>
                    </div>
                    <div className='right'>
                    </div>
                 </button>
            </div>
                <ContentTheme/>

            </div>
        </ThemeContent.Provider>
    )
}

export default App;
