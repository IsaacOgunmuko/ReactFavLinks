const express = require('express') //importing the express function from the express lib
const app = express() // we're setting a new variable called app to be an express app instance

const db = require('./queries')

const port = 3000 // defining the port we want our app to run on 

// add some middleware to allow us to work with JSON data 
app.use(express.json())





app.get("/", (req,res)=>{
    res.send("Node / Express server is operation!")
})

app.get("/something/different", (req,res)=>{
    res.send("Hey hey you found the easter egg")
})


let favLinks = [
    {name: "test"}
]

// CRUD API

// API function 1 - create something
app.post("/favlink", (req, res)=>{
    // function to call when the user wants to create a new favLink
    let name = req.body.name
    let URL = req.body.URL

    let newFavLink = {name, URL} // {name: name, URL: URL}

    favLinks.push(newFavLink) // or call a db function to insert or add data

    if(newFavLink) {
        res.send("success")
    } else {
        res.send("Error!")
    }

})

// API function 2 - read something 
app.get("/favlinks",db.getFavLinks)

//API function 3 - update something
app.put("/favlink", (req,res)=>{
    res.send("Updating something!")
})
// API function 4  - update something
app.delete("/favlink", (req, res)=>{
    let name = req.body.name
     favLinks = favLinks.filter((favlink)=>{
        return favlink.name !== name
    })
    res.send(favLinks)
})

app.listen(port, () =>  {
    console.log(`Example app listening on port ${port}`)
})


