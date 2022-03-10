
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
                        <input type="checkbox" name="checkbox" value={value.id} className="check"></input>
                        <li className="todo" key={value.id}>{value.title}</li>
                    </>
                )
            })}
        </>
    )
}

export default ToDo