import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

import ListItem from '../ListItem/ListItem'


function App() {
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
