
type ToDo = {
    title: string,
    id: number
}

type PropsType = {
    taskList: ToDo[]
}

const ToDoList = (props: PropsType) => {
    return (
        <>
            <ul className='todos'>
                {/* {props.taskList.map((value) => {
                    return (
                        <li className="todo" key={value.id}>{value.title}</li>
                    )
                })} */}
            </ul>
        </>
    )
}

export default ToDoList
