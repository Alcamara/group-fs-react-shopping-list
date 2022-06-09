function ListHeader({reset, clear}) {
    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={reset}>Reset</button>
            <button onClick={clear}>Clear</button>
        </>
    )
}
export default ListHeader;
