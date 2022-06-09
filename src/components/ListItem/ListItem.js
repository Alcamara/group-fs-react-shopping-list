



function ListItem({ item, buyItem }) {
    function handlePurchase(evt){
        evt.preventDefault();
        buyItem(item.id);
    }

    return (
        <div className="grocery">
            <p>{item.name}</p>
            <p>{item.quantity}{item.unity}</p>
            { item.purchaseStatus ? 
            <span>Purchased</span>:
            <span>
 <button onClick={handlePurchase}>Buy</button>
                <button>Remove</button>
                
                <button onClick={()=>{
                    delGroceryItem(item.id)
                }}>Remove</button>
       

            </span>
            
            }
            
        </div>
    );



}



export default ListItem;