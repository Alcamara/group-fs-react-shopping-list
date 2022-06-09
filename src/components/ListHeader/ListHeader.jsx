function ListHeader() {
    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={resetGroceryItems}>Reset</button>
            <button onClick={clearGroceryItems}>Clear</button>
        </>
    )
}
export default ListHeader;
