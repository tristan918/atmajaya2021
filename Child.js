import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './App';

function Child(props) {
    const {name, age} = useContext (DataContext)

    return (
        <div>
            {name != null ? (name + "Timekeeper") : "No name"}
            {age}
        </div>
    );
}

export default Child;