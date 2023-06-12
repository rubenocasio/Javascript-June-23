import "bootstrap/dist/css/bootstrap.min.css";
// import FetchAPI from "./components/FetchAPI";
// import AxiosAPI from "./components/AxiosAPI";

import './App.css';
import UseEffectsAPI from "./components/UseEffectsAPI";
import ColorContext from "./contexts/ColorContext";
import { useState } from "react";

function App() {
  const [themeColor, setThemeColor] = useState("")

  return (
    <div className="App">
      <ColorContext.Provider value={{themeColor, setThemeColor}}>

        {/* <FetchAPI/> */}
        {/* <AxiosAPI/> */}
        <UseEffectsAPI />
        
      </ColorContext.Provider>
    </div>
  );
}

export default App;
