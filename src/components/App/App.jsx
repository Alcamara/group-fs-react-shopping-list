
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
    
    function AddItem(nameInput, quantity, unit){
        
        console.log('In AddItem');
        axios({
            url:'/groceries',
            method: 'POST',
            data:{
                name: nameInput,
                quantity: Number(quantity),
                unit: unit

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

    return (
        <div className="App">
            <Header />
            <main>
                <ListForm AddItem={AddItem}
                />

                <ListHeader/>
                <div>
                    {groceryItems.map(item =>
                        <ListItem key={item.id}item={item}/>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
