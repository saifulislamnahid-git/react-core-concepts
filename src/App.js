import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Person></Person>
        <Person></Person>
        <Person></Person>

      </header>
    </div>
  );
}

function Person(){
  const personStyle={
    color: 'red',
    backgroundColor: 'yellow',
    border: '30px solid white',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name : Sakib Al Hasan</h1>
      <h3>Job : Cricketer</h3>
    </div>
  );
}

export default App;
