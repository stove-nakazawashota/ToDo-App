import React from 'react'

const Form = () => {
    return (
        <>
            <div className='box'>
                <input className='input'></input>
                <input className='submit-button'
                    type="submit"
                    value="ToDoを作成"
                    onSubmit={(e) => e.preventDefault()}
                />
            </div>
        </>
    )
}

export default Form