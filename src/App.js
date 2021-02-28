import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Rajjak','Bappi','Sakib khan', 'Riyaj','Bappa Raj'];
  const products = [
    {name: 'Photoshop', price: '$17'},
    {name: 'Illustrator', price: '$14'},
    {name: 'PDF Viewer', price: '$18'},
  ]

  const friends = [
    {name: 'Anas Miah', age: '18'},
    {name: 'Emon Sarker', age: '20'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <p>I am a react Person</p>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Person name="Saiful islam" job="Freelancer"></Person>
        <Person name="Masudur Rahman" job="Freelancer"></Person>

        {
          friends.map(fd => <Friend friend={fd}></Friend>)
        }
        
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border : "1px solid gray",
    borderRadius : '5px',
    backgroundColor: 'lightGray',
    height: '250px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div>
      <h3>My Name: {props.name}</h3>
      <p>My profession: {props.job}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Friend(props){
  const {name, age} = props.friend;

  return (
    <div>
      <h3>Friend Name: {name}</h3>
      <h2>Friend Age: {age}</h2>
    </div>
  )
}





export default App;
