import {useState} from 'react';

function ListForm({AddItem}) {
    const [ quantity, setQuanity] = useState('')
    const [unit, setUnit] = useState('')
    const [inputName, setInputName] = useState('')
    return (
        <div>
            <h2>Add Items</h2>
            <form>
                <div>
                    <label>Item:</label>
                    <input
                        onChange={(event) => {
                            setInputName(event.target.value)
                            console.log(inputName)
                        }}
                        type='text'
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        onChange={(event) =>{
                            setQuanity(event.target.value)
                            console.log(quantity)
                        }}
                        type='text'
                    />
                    <label>Unit:</label>
                    <input
                        onChange={(event) => {
                            setUnit(event.target.value)
                            console.log(unit)
                        }}
                        type='text'
                    />
                </div>
                 <div>
                    <button onClick={(evt) =>{
                        evt.preventDefault();
                        AddItem(inputName, quantity, unit)
                    }}>Add Item</button>
                 </div>
            </form>
        </div>
    )
}

export default ListForm;