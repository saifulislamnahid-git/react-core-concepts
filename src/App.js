import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name: 'Photoshop', price: '$17'},
    {name: 'Illustrator', price: '$14'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <p>I am a react Person</p>
        <Person name="Saiful islam" job="Freelancer"></Person>
        <Person name="Masudur Rahman" job="Freelancer"></Person>
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
  console.log(name, price);
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




export default App;
