import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="tarjeta">
          <Card>
            <NavBar />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
