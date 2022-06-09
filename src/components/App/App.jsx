
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
        }).then((err)=>{
            console.log('Delete request failed');
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

    return (
        <div className="App">
            <Header />
            <main>
                <ListForm/>

                <ListHeader/>
                <div>
                    {groceryItems.map(item =>
                        <ListItem delGroceryItem={delGroceryItem} key={item.id}item={item}/>
                    )}
                    
                </div>
            </main>
        </div>
    );
}

export default App;
