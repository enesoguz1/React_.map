
import React from 'react';
import './App.css';

class App extends React.Component{
  render() {
    this.state = [
      {name: "Ahmet", age: "51", school: "Oxford"},
      {name: "Mehmet", age: "20", school: "İTÜ"},
      {name: "Enes", age: "26", school: "ODTÜ"},
    ];
    return (
      <div>
        {this.state.map((userInfo) => {
          return(
            <div>
              <h1>{userInfo.name}</h1>
              <h2>{userInfo.age}</h2>
              <h3>{userInfo.school}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
