

function ListItem({ item, delGroceryItem }) {


    return (
        <div className="grocery">
            <p>{item.name}</p>
            <p>{item.quantity}{item.unity}</p>
            <span>
                <button>Buy</button>
                <button onClick={()=>{
                    delGroceryItem(item.id)
                }} 
                    >Remove</button>
            </span>
        </div>
    );



}



export default ListItem;