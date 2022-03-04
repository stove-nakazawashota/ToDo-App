import React from 'react'

type TaskType = {
    addTaskList: () => void
}

const Form = (props: TaskType) => {
    return (
        <>
            <div className='box'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                ></form>
                <input className='textinput' type="text"></input>
                <input className='submit-button'
                    type="submit"
                    value="ToDoを作成"
                    onSubmit={(e) => e.preventDefault()}
                    onClick={props.addTaskList}
                />
            </div>
        </>
    )
}

export default Form
