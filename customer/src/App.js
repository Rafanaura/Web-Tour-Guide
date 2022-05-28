import React from "react";
import Main from "./Main";
import Navbar from "./components/navbar"

class App extends React.Component {
    
  render (){
    return(
      <React.Fragment> 
      <Navbar/>
      <Main/>
      </React.Fragment>
    );
  }
}
export default App;
