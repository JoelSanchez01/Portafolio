import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header";
import Card from "./components/Card";
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <div className="tarjeta">
          <Card>
            <h1>hola</h1>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
