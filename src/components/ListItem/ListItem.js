

function ListItem({ item }) {


    return (
        <div className="grocery">
            <p>{item.name}</p>
            <p>{item.quantity}{item.unity}</p>
            <span>
                <button>Buy</button>
                <button>Remove</button>
            </span>
        </div>
    );



}



export default ListItem;