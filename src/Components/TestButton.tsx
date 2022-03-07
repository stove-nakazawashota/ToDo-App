type PropsType = {
    test: () => void
}

const TestButton = (props: PropsType) => {
    return (
        <>
            <button onClick={props.test}>テスト</button>
        </>
    )
}

export default TestButton