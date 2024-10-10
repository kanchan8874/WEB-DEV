'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div className="w-[80%] ma-auto border border-red-500"
            onMouseMove={(e) => {console.log(e.clientX ,e.clientY);}}>

            <h1 className="text-center my-5 front-bold text-3xl">EventHandiling</h1>

            <button className="bg-black text-white p-3"
                onClick={() => { alert('button was clicked') }}
            >Click Event
            </button>

            <input type="text" 
            onChange={(e)  => {console.log(e.target.value );}}
            className="border rounded p-5 mt-4 w-full " />

            <input type="color"
            // onChange={(e) => {console.log(e.target.value);}} 
            onChange={(e) =>{document.body.style.backgroundColor = e.target.value;}}
            className="mt-5"/>


            <input type="file" 
            onChange={(e) => { console.log(e.target.files);}}
            // kayi file ko select krne ke liye
            multipal
            className="block mt-5" />

            <input type="text" onKeyDown = {(e) => {console.log(e.code);}}
            className="border rounded p-3 mt-4 w-full" /> 
        </div>
    )
}

export default EventHandling;