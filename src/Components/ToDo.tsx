
type ToDo = {
    title: string,
    id: number
}

type PropsType = {
    taskList: ToDo[]
}

const ToDo = (props: PropsType) => {
    return (
        <>
            {props.taskList.map((value) => {
                return (
                    <>
                        <li className="todo" key={value.id}>{value.title}</li>
                        <input type="checkbox" name="checkbox" className="check"></input>
                    </>
                )
            })}
        </>
    )
}

export default ToDo