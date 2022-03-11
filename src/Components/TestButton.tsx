type PropsType = {
    deleteToDo: () => void
}

const TestButton = (props: PropsType) => {
    return (
        <>
            <button onClick={props.deleteToDo}>テスト</button>
        </>
    )
}

export default TestButton