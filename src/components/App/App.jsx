
import React from 'react';
//added useEffect and useState
import { useEffect, useState } from 'react';
//import axios
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';

import ListItem from '../ListItem/ListItem'


function App() {
    //created state
    const [groceryItems,setGroceryItems] = useState([]);

    function getGroceryItems(){

        axios({
            url:'/groceries',
            method:'GET',
        }).then((results)=>{
            console.log('Get',results.data);
            
        }).catch((err)=>{
            console.log('Get require failed',err)
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>

                
                <div>
                    {groceryItems.map(item =>
                        <ListItem item={item}/>
                    )}
                    
                </div>
            </main>
        </div>
    );
}

export default App;
