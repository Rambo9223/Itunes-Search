// import express
const express = require('express');
//const router = express.Router();
// import fs to update the Web-Project json file 
const helmet = require("helmet");
const fs = require('fs');
const app = express();
const path = require("path")
const port = process.env.PORT || 5000 // use port 5000
const favouritesList = require("./Favourites-List.json"); // import our json file
const bodyParser = require('body-parser');//
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(helmet());
const fetch = (...args) => import("node-fetch").then(({default:fetch})=>fetch(...args));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/welcome', (req,resp)=>{
    resp.status(200).send({message:"Welcome to the server!"});
})
// the base get function returns the current favourites list
app.get('/api', (req, resp)=>{
    resp.send(favouritesList)
})

/* This is the async function to retrieve the search results from the api, 
Question? From the previous submission I had a function 
in the frontend that would fetch data from the api, 
in the resubmission as requested I have two async functions, one from the frontend to 
pass the link for the backend function to search the API. Why would this 
way be the preferred way to structure the code?   */
app.get("/search/",async function(req, resp){
    let link = String(JSON.stringify(req.query));
    let editLink = link.trim().replace(/,/g,'&').replace(/"/g,'').replace(/ /g,"+").replace(/:/g,"=").replace(/{/,'').replace(/}/,'').replace(/=/,":");
    
    try {
        let response = await fetch(editLink);
        let result = await response.json();
        resp.status(200).json(result);
    }catch(err){
        console.log(err);
        resp.status(500).json({message:"Internal Server Error."})
    }
    
})

/*This function will delete the information on the app when the user
leaves the page or refreshes */
app.get('/api/last', (req, resp)=>{
    for(let i = 0; i = favouritesList.length;){
        favouritesList.pop()
        console.log(favouritesList.length);
    }
    resp.send(JSON.stringify("Previous session data removed"))
    fs.writeFileSync('./Favourites-List.json', JSON.stringify(favouritesList))
})

// creates new list item
app.post('/list/', (req, resp)=>{
    const id = Number(req.body.trackId);//changed from collectionID

    let i = 0;// counting variable
    let add = true;// boolean variable changed if user has supplied a
    // duplicate id
    const addItem = req.body;
    
    if(favouritesList.length>1){
    favouritesList.forEach((item)=>{
        // check if id is the same as any other item
        if(item.trackId === id){
            console.log("duplicate!");
            // if true log error
            resp.send(JSON.stringify(`Item with id-${id} already exists`));
            // add is false to prevent the item being added 
            add = false; 
        }else if(add === true && i===favouritesList.length-1){
            console.log("should  be adding");
            // if we have looped through array and there are no duplicate id's
            // add item & log success           
            // object is pushed to the projectList 
            favouritesList.push(addItem)
            // the json file is updated 
            fs.writeFileSync('./Favourites-List.json', JSON.stringify(favouritesList))
            resp.send(favouritesList); 
        }i++;// add 1 to i on each loop

    })}else{// if list has no items this will add first entry
        favouritesList.push(addItem)
        fs.writeFileSync('./Favourites-List.json', JSON.stringify(favouritesList))
        resp.status(200).send(favouritesList); 
        console.log(favouritesList);
    }
});

// delete person
app.delete(`/list/`, (req, resp) => {
    console.log(req.query.Id);
    let id = Number(req.query.Id);//id of item to delete
    let i = 0;// counting variable = index value of item to delete
    favouritesList.forEach((item)=>{
        //if item id = id
        if(item.Id === id || item.trackId === id){// trackId is only here for testing
            favouritesList.splice(i, 1)
            fs.writeFileSync('./Favourites-List.json', JSON.stringify(favouritesList))
            resp.send(favouritesList)// log success
        }else if(i === favouritesList.length-1){
            //else no id's match, log error
            resp.send(JSON.stringify(`Error, cannot find item with id - ${id}`))
        }
        i++; 
    })
    
})
// a listen message to show user the server is running
app.listen(port, ()=>console.log(`Listening on Port-${port}`))

module.exports = app;// required for testing purposes
//module.exports = router;