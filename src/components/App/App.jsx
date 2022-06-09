
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

    return (
        <div className="App">
            <Header />
            <main>
                <ListForm/>

                <ListHeader/>
                <div>
                    {groceryItems.map(item =>
                        <ListItem key={item.id} item={item} buyItem={handleBuyItem}/>
                    )}
                    
                </div>
            </main>
        </div>
    );
}

export default App;
