type PropsType = {
    deleteToDo: () => void
}

const TestButton = (props: PropsType) => {
    return (
        <>
            <button className="delete-todo" onClick={props.deleteToDo}>ToDoを削除する</button>
        </>
    )
}

export default TestButton

