import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import DeleteProject from './DeleteProject';
import * as Icon from "react-bootstrap-icons";


/* The GetFavourites function is the main function used to 
retrieve the list from the backend,  */
function GetFavourites() {

// item is the json object containing the list entries 

const [item, setItem] = useState([])

/* fetchData is async function that 
retrieves the list as json file */
const fetchData = async () => {
    const response = await fetch('/api')
    if (!response.ok) {
    throw new Error('Data coud not be fetched!')
    } else {
    return response.json()
    }
}


/* after the json file is retrieved this
useEffect code runs taking file and making the 
item variable = the response */
useEffect(() => {
    fetchData()
    .then((res) => {
        setItem(res)
    })
    .catch((e) => {
        console.log(e.message)
    })
}, [])

/* Finally we use the.map method to return each 
list item in to a bootstrap card on the page
each item also has an edit and delete button mapped 
on to the card. 

*/
return (
    <>
    <div className='App-body'>
    <div className="row">
    {item.map((item)=>{
        return(
            <>
            
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 pt-5"  key={item.data.trackId}>
            <div className='favourite-container'>
            <div className="card h-80">
            <div className="card-body">
            <h4 className='title'>My Favourites:<br/>{item.data.kind}</h4>
            </div>
            <div>
            <img src={item.data.artworkUrl100} alt="thumbnail" height={"120px"} width={"120px"}/>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <strong>Name:</strong> {(item.data.trackName===undefined)?item.data.collectionName:item.data.trackName}
                </li>
                <li className="list-group-item">
                <strong>Artist:</strong> {item.data.artistName}
                </li>
                <li className="list-group-item">
                <strong>URL:</strong><a href={(item.data.collectionViewUrl!==undefined)?item.data.collectionViewUrl:item.trackViewUrl}>Link to store</a>
                </li>
            </ul>
            
            </div>
            <div>
            <Button variant='danger' onClick={()=>{DeleteProject(item.Id)}}>Delete <Icon.Trash/></Button>
        </div>
        </div>
        </div>
        </>)      
    })}   
    </div>

    </div>
    </>)
}
export default GetFavourites

