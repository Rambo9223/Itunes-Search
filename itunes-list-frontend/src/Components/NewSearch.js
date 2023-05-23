import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button"
import AddFavourite from "./AddFavourite";
import { PlusCircle } from "react-bootstrap-icons";

/* NewSearch will deal with the search made by the user 
to the API, 
*/

function NewSearch() {
  // usestate variables store the text input,if we show items,path,returned items 
  const [search, setSearch] = useState("");
  const [bool,setBool] = useState(false);
  const [path,setPath] = useState("");
  const [item, setItem] = useState([]);

  // get the checkboxes and radio inputs from form
  let checkboxes = document.getElementsByClassName("media");
  let radioAll = document.getElementById("all");
  // set basic path for the api
  let basicPath = "https://itunes.apple.com/search?limit=10";

function HandleSearch(){
    // we remove blank space at beginning & end, replace space with +
    // and make all text lower case
    let apiSearch = search.trim().replace(/ /g,"+").toLocaleLowerCase();
    // add this to the path 
    let newPath = `${basicPath}&term=${apiSearch}`;
    // if user has checked select all radio
    if(radioAll.checked===true){
        
        newPath = `${newPath}&media=all`;
        
    }else{
        // else user has selected particular fields
        for(let i = 0; i<checkboxes.length; i++){
            let box = checkboxes[i];//each checkbox
            if(box.checked === true){//if checked
              // add box value to path
                newPath = (`${newPath}&media=${box.value}`);
            }
        }
    }
    // setPath to usestate path 
    setPath(newPath);
}
// if user has selected select all radio
// HandleAll will uncheck other checkboxes
function HandleAll(){
  let checkboxes = document.getElementsByClassName("media");
   for(let i =0; i<checkboxes.length; i++){
    let box = checkboxes[i];
    box.checked = false;
    box.addEventListener("click",()=>{HandleSelect()})
   }
}
// if user has selected indivial checkboxes 
// handle select will uncheck select all radio
function HandleSelect(){
    let radioAll = document.getElementById("all");
    radioAll.checked = false;
}

  /* fetchData is async function that 
retrieves the list as json file */
  const fetchData = async(link) => {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  /* after the json file is retrieved this
useEffect code runs taking file and making the 
item variable = the response */
  useEffect(() => {
    fetchData(path)
      .then((res) => {
        setItem(res.results);
        setBool(true)
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [path]);
  let i = 0;
  console.log(item);

  return (
    <>
    <header className="App-header">
      <div>
        {/*We return the form for user to search the api with the 
        check boxes they can select to narrow the search field*/}
        <form TestId="test-form" className="new-item-form">
          <label className="form-labels">Search:</label>
        <input
            className="form-inputs"
            type="text"
            id="user-id"
            value={search}
            onChange={(e) => {
            setSearch(e.target.value);
            }}/>
        <br/>
        <div className="check-container">
        <div className="check-group">
        <label for="movie">
        <input type="checkbox" className="media" id="movie" name="movie" value="movie"/>Movie</label>
        <label for="tvShow">
        <input type="checkbox" className="media" id="tv" name="tvShow" value="tvShow"/>Tv Show</label>
        <label for="podcast">
        <input type="checkbox" className="media" id="podcast" name="podcast" value="podcast"/>Podcast</label>
        <br />
        </div>
        <div className="check-group">
        <label for="music">
        <input type="checkbox" className="media" id="music" name="music" value="music"/>Music</label>
        <label for="mv">
        <input type="checkbox" className="media" id="mv" name="mv" value="musicVideo"/>Music Video</label>
        <label for="shortFilm">
        <input type="checkbox" className="media" id="sfilm" name="sfilm" value="shortFilm"/>Short Film</label>
        <br />
        </div>
        <div className="check-group">
        <label for="abook">
        <input type="checkbox" className="media" id="abook" name="abook" value="audiobook"/>Audio Book</label>
        <label for="ebook">
        <input type="checkbox" className="media" id="ebook" name="ebook" value="ebook"/>ebook</label>
        <label for="software">
        <input type="checkbox" className="media" id="software" name="software" value="software"/>Software</label>
        <br />
        </div>
        </div>
        <div className="check-all">
        <label for="all"><input type="radio" onClick={HandleAll} className="media-all" id="all" name="all" value="all" />Select All</label>
        </div>
        <Button variant="primary" onClick={HandleSearch} type="button" TestId="search">
            Search
        </Button>
        </form>
      </div>
      </header>
      <div className="App-body">
        {/* We map the search results in to card 
        each result has a button rendered that the user
        can click to add an item to their favourites list*/}
      <div className="row">
        {(bool)?item.map((item) => {
        return (
            <>
            <div
                className="col-lg-3 col-md-4 col-sm-6 mb-3 pt-5"
                key={item.collectionId}
              >
                <div className="result-container">
                <div className="card h-80">
                  <div className="card-body">
                    <h4 className="title">
                      Results:
                      <br />
                      {item.kind}
                    </h4>
                    <img src={item.artworkUrl100} alt="thumbnail"/>
                  </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <strong>Name:</strong> {item.trackName}
                </li>
                <li className="list-group-item">
                <strong>Artist:</strong> {item.artistName}
                </li>
                <li className="list-group-item">
                <strong>URL:</strong><a href={item.trackViewUrl}>Link to store</a>
                </li>
            </ul>
                </div>
                <div>
                    <Button variant="success" onClick={()=>{AddFavourite(item)}}><PlusCircle/> Add to favourites</Button>
                </div>
              </div>
              </div>
              <script>{i++}</script>
            </>
          );
        }):null}
      </div>
      </div>
    </>
  );
}
export default NewSearch;
