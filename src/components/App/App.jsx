
import React from 'react';
//added useEffect and useState
import { useEffect, useState } from 'react';
//import axios
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';

import ListItem from '../ListItem/ListItem'
import ListHeader from '../ListHeader/ListHeader.jsx';
import ListForm from '../ListForm/ListForm.jsx';

function App() {
    //created state
    const [groceryItems,setGroceryItems] = useState([]);

    useEffect(()=>{
        getGroceryItems()
    },[])

    function delGroceryItem (id){
        console.log('in del', id);

        axios({
            url:'/groceries/'+id,
            method:'DELETE'
        }).then(()=>{
            console.log('Delete request worked');
            getGroceryItems()
        }).catch((err)=>{
            console.log('Delete request failed',err);
        })
    }

    function getGroceryItems(){

        axios({
            url:'/groceries',
            method:'GET'
        }).then((results)=>{
            console.log('Get',results.data);
            setGroceryItems(results.data)
        }).catch((err)=>{
            console.log('Get require failed',err)
        })
    }
    
    function AddItem(nameInput, quantity, unit){
        
        console.log('In AddItem');
        axios({
            url:'/groceries',
            method: 'POST',
            data:{
                name: nameInput,
                quantity: Number(quantity),
                unity: unit

            }
        })
        .then((results) => {
            console.log('POST results', results)
            getGroceryItems()
            
        })
        .catch((err) => {
            console.log('POST failed', err)
        })
        
    }

    function handleBuyItem(itemId){
        console.log('in handlebuy item',itemId);
        axios.put(`/groceries/buy-item/${itemId}`)
            .then(() =>{
                console.log('bu item success!')
                getGroceryItems();
            })
            .catch((err) =>{
                console.log('buy item failed', err);
            })












    }

    function resetGroceryItems(){
        axios({
            url:'/groceries',
            method:'PUT'
        }).then((results)=>{
            console.log('PUT',results.data);
            getGroceryItems()
        }).catch((err)=>{
            console.log('PUT failed', err)
        })
    }

    function clearGroceryItems(){
        axios({
            url:'/groceries',
            method:'DELETE'
        }).then((results)=>{
            console.log('DELETE',results.data);
            getGroceryItems()
        }).catch((err)=>{
            console.log('DELETE failed', err)
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <ListForm AddItem={AddItem}
                />

                <ListHeader 
                reset={resetGroceryItems}
                clear={clearGroceryItems}
                />

                <div>
                    {groceryItems.map(item =>

                        <ListItem key={item.id}  delGroceryItem={delGroceryItem} item={item} buyItem={handleBuyItem}/>

                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
