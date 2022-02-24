import React from 'react'

const Form = () => {

    const test = () => {
        console.log("AAA")
    }

    return (
        <>
            <div className='box'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                ></form>
                <input className='input' type="text"></input>
                <input className='submit-button'
                    type="submit"
                    value="ToDoを作成"
                    onSubmit={(e) => e.preventDefault()}
                    onClick={() => test()}

                />
            </div>
        </>
    )
}

export default Form