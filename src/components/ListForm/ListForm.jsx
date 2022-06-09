function ListForm() {
    return (
        <div>
            <h2>Add Items</h2>
            <form>
                <div>
                    <label>Item:</label>
                    <input
                        type='text'
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type='text'
                    />
                    <label>Unit:</label>
                    <input
                        type='text'
                    />
                </div>
                <div>
                    <button>Add Item</button>
                </div>
            </form>
        </div>
    )
}

export default ListForm;