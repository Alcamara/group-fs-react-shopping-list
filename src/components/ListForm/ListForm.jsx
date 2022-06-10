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
                    value={inputName}
                        onChange={(event) => {
                            setInputName(event.target.value)
                            console.log(inputName)
                        }}
                        type='text'
                    required/>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        value={quantity}
                        onChange={(event) =>{
                            setQuanity(event.target.value)
                            console.log(quantity)
                        }}
                        type='text'
                    required/>
                    <label>Unit:</label>
                    <input
                        value={unit}
                        onChange={(event) => {
                            setUnit(event.target.value)
                            console.log(unit)
                        }}
                        type='text'
                    required/>
                </div>
                 <div>
                    <button onClick={(evt) =>{
                        evt.preventDefault();
                        AddItem(inputName, quantity, unit)
                        setInputName('');
                        setQuanity('');
                        setUnit('');
                    }}>Add Item</button>
                 </div>
            </form>
        </div>
    )
}

export default ListForm;