
import React from 'react';
//added useEffect and useState
import { useEffect, useState } from 'react';
//import axios
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';

import ListItem from '../ListItem/ListItem'
import ListHeader from '../ListHeader/ListHeader.jsx';

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
                <p>Under Construction...</p>

                <ListHeader 
                reset={resetGroceryItems}
                clear={clearGroceryItems}
                />

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
