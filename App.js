import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import Child from './Child';
import Home from './Home';
import Login from './Login';
import axios from 'axios';

export const DataContext = createContext({}); 

function App() {
  const [name, setName] = useState("Vertin")
  const [age, setAge] = useState("21")
  const [message, setMessage] = useState("")
  const [key,setKey] = useState("");
  const [array,setArr] = useState([])
  const [home, setHome] = useState(false)
  const [product, setProduct] = useState([])

 // useEffect(() => {
 //   setName("Sonetto")
  //   setAge(20)
  // }, [])

  const onChangeName = () => {
    setName("Tristan")
  }

  const onChangeAge = () => {
    setAge(19)
  }

  const handleChange = (event) => {
    setKey(event.target.value);
  }

  const addMessage = () => {
    setArr([
      ...array,
      key
    ])
    setKey("")
  }

useEffect(() => {
  axios.get('https://dummyjson.com/products?')
  .then(res => {
    setProducts(res.data.products);
  })
})

  const contextData = {
    name,
    age
  }
  console.log(array);
  return (
<DataContext.Provider value={contextData}>
    <div className="App">
      <ul>
        {products.map(product =>
          <li key={product.id} style={{textAlign: "left", paddingBottom: 20}}>
            Name: {product.title} <br />
            Description: {product.description} <br />
            Price: {product.price} <br />
          </li>
          )}
      </ul>
    <h1>{name}</h1>
    <h3>{age} years old</h3>
    <button onClick={(onChangeName)}>
      Change Player
    </button>
    <button onClick={(onChangeAge)}>
      Change Age
    </button>

    <Child name={name} age={age} />
    <br/>
  
    <textarea
    rows={5}
    cols={50}
    onChange={handleChange} />
    <p>Message: {key}</p>
    <p>What's your name? {message}</p>
    <button onClick={addMessage}>
      Add new message
    </button>
    {array.map(text => <h3>{text}</h3>)}
<div style={{padding: 20 }}></div>
    {home ?
      <Home />:
      <Login />
}
{home ?
    <button onClick={() => setHome(false)}>
    Login!
  </button>:
      
      <button onClick={() => setHome(true)}>
      Logout!
    </button>
}

    </div>



    </DataContext.Provider>
  );
}

export default App;
