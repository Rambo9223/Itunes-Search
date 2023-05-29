import React from "react";
import * as Icon from "react-bootstrap-icons"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import GetFavourites from './Components/GetFavourites';
import NewSearch from './Components/NewSearch';
import { Route,Routes,Link } from "react-router-dom";
/* Marker Please note!!
as of today 29.05.23 the link in the course material 
https://performance-partners.apple.com/resources/documentation/itunes-store
returns a page with no content, if a student hadn't made their app yet 
there would be no instructions with how to set up search criteria to use the 
API.

Also not as per email with mentor I have not deployed this app.*/

/* Add a nav bar, that contains links to the pages 
for search and favourites, look in to how helmut works etc
 */
function App() {
  window.addEventListener("beforeunload", async function(event) {
  event.preventDefault();
  const response = await fetch('/api/last')
    if (!response.ok) {
    throw new Error('Data coud not be removed!')
    } else {
    this.alert("data removed");
    }
  });
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
        <Route path="/search" element={<NewSearch/>}></Route>
        <Route path="/favourites" element={<GetFavourites/>}></Route>
      </Routes>
      </div>
      </> 
  );
}

export default App;
