
type ToDo = {
    title: string,
    id: number
}

const ToDoList = (props: ToDo) => {
    return (
        <>
            <ul className='todos'>
                <li className='todo'>{props.title}</li>
                <li className='todo'>ToDo2</li>
                <li className='todo'>ToDo3</li>
            </ul>
        </>
    )
}

export default ToDoList
