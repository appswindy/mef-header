import React, { useState, useEffect } from 'react'
import Data from '../Data'
import './buttonTestStyle.css'
const ButtonTest = () => {

    //const customEvent = new CustomEvent('eventFromMfe', { detail: { name: 'Ryan' } })

    // useEffect(() => {
    //     window.dispatchEvent(customEvent);
    //     console.log(customEvent)
    // }, []);
    const handleState = (e) => {

        const customEvent = new CustomEvent('eventFromMfe', { detail: { names: e.target.value } })

        window.dispatchEvent(customEvent);
    }

    return (
        <button className='cool'>
            <form className='decide_editions input' ></form>
            <label htmlFor="argentina">
                <input type="radio" onClick={handleState} name="pais" id="argentina" value={'argentina'} />Argentina
            </label>
            <label htmlFor="uruguay">
                <input type="radio" onClick={handleState} name="pais" id="uruguay" value={'uruguay'} />Uruguay
            </label>
        </button>
    )
}

export default ButtonTest