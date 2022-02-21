import React from 'react'

const Form = () => {
    const input: HTMLInputElement = document.querySelector('.input')!

    return (
        <>
            <div className='box'>
                <input className='input'></input>
                <button className='button'>Todoを作成</button>
            </div>
        </>
    )
}

export default Form