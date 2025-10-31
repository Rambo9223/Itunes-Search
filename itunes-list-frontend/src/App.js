import React from "react";
import * as Icon from "react-bootstrap-icons"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import GetFavourites from './Components/GetFavourites';
import NewSearch from './Components/NewSearch';
import { Route,Routes,Link } from "react-router-dom";

function App() {

  return (
    <>
    <div className="App">
      <h1 className="mb-3">My Itunes App <Icon.Apple/></h1>
      <nav className="nav-bar">
          <ul className="nav-list">
            <li><Link style={{textDecoration:"none",color:"white"}} className="links" to="/search" data-testid="Search">Search</Link></li>
            <li><Link style={{textDecoration:"none",color:"white"}} className="links" to="/favourites">My Favourites</Link></li>
          </ul>
        </nav>
        
    <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/search" element={<NewSearch/>}></Route>
        <Route path="/favourites" element={<GetFavourites/>}></Route>
      </Routes>
      </div>
      </> 
  );
}

export default App;


  /* Task specifies information doesn't need to be stored when user 
  leaves page, so previously if page is refreshed or
  the app is closed this code would remove the
  data in the list. for resubmission I have removed the code below. */
  /*
  window.addEventListener("beforeunload", async function(event) {
  event.preventDefault();
  const response = await fetch('/api/last')
    if (!response.ok) {
    throw new Error('Data coud not be removed!')
    } else {
    this.alert("data removed");
    }
  });*/