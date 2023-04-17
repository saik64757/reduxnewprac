import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import store from "./redux/store";
import React from "react";
import { Provider } from "react-redux";
import Icecreamcontainer from "./Components/Icecreamcontainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <Icecreamcontainer />
      </div>
    </Provider>
  );
}

export default App;
