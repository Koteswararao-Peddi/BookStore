import React,{useEffect, useState} from 'react'
import Darkpng from "../assets/website/dark-mode-button.png"
import lightpng from "../assets/website/light-mode-button.png"


const DarkMode = () => {
    const [theme,setTheme] = useState(localStorage.getItem("theme") ||"light");

    useEffect(()=>{
        if(theme ==="dark"){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark");
        } 
        else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light");
        }
    },[theme]);

    const themeHandler = ()=>{
        setTheme(theme==="dark"?"light":"dark")
    }


  return (
    <div className='relative '>
      <img src={lightpng}
      className={`w-12 cursor-pointer drop-shadow-[4px_2px_3px_rgba(0,0,0,0.5)] transition-all duration-300 absolute right-0  z-10 ${theme==="dark"?"opacity-0":"opacity-100"}`}
      onClick={themeHandler}
      alt="" />
      <img src={Darkpng}
      onClick={themeHandler}
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 '
      alt="" />
    </div>
  )
}

export default DarkMode