<<<<<<< HEAD
import colorItems, { ColorItem } from "./color-items";
import { options } from "./coloresPaleta";
import {useEffect, useState} from 'react'


const NewApp = () => {
    
useEffect(() => {
    const currentColor = localStorage.getItem('color');
    if (currentColor) {
        setTheme(currentColor);
    }

    }, [])


    const [state, setState] = useState(false)

    const colors = [
        {
            color:`#2D3636`,
            name:'option1'
        },

        {
            color:`#4834D4`,
            name:'option2'
        },

        {
            color:`#f55bf2`,
            name:'option3'
        },

        {
            color:`#F9CA24`,
            name:'option4'
        },

        {
            color:`#6AB04C`,
            name:'option5'
        },

        {
            color:`#6f8dc9`,
            name:'option6'
        },

        {
            color:`#e6ac49`,
            name:'option7'
        },

        {
            color:`#FFDEE9`,
            name:'option8'
        },

        {
            color: `#BD1010`,
            name:'option9'
        }
        
    ];


    const setTheme = (name) => {
        document.documentElement.style.setProperty('--bg-color', options[name].background);
        document.documentElement.style.setProperty('--bg-input', options[name].backgroundColor);
        document.documentElement.style.setProperty('--color', options[name].color);
    }


    const setColor = (name) => {
        setTheme(name);
        localStorage.setItem('color', name);

    }

    return (
        <div className="newApp">
            <div className={`color-switcher ${state && 'color-switcher--open'}`}>
            <button onClick={() => setState(prevState => !prevState)} className="but-conf"><i class="ri-brush-line"></i></button>
              <h1 className="heading">Select Color</h1>
              <div className="color-list">
                {colors.map( (color, idx) => <ColorItem key={idx} setColor={()=>setColor(color.name)} color={color.color}/> )}
=======

const NewApp = () => {
    
    return (
        <div className="newApp">
            <div className="color-switcher">
              <h1 className="heading">Select Color</h1>
              <div className="color-list">
                
>>>>>>> Color-Switcher-Feature
              </div>
            </div>
        </div>
    )
};

export default NewApp;