export function ErrorBoundaries (props) {
    const SomethingWentWrong = () => <>
        <h2>Hmmmmmmmmmm.....</h2>
    </>

    let isEverythingOk = true;

    return <> {isEverythingOk ? props.children : <SomethingWentWrong/>} </>
}

