// Step 1 ) Establish a connection to our PostGres database

const Pool = require ('pg').Pool // a connection object to PostGress

const pool = new Pool({

    user:process.env.DB_USERNAME,
    host:process.env.DB_Host,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORd,
    port: process.env.DB_PORT
})


const getFavLinks = (req,res)=>{
    //use pg to get our data from the database and return it to the user

    pool.query('SELECT * FROM favlinks',(error, result)=>{
        if(error){
            // do something with the error!
            //res.status(400).json("Something went wrong")
            throw error
        }else{
        console.log(result)
        res.status(200).json(results.rows)    
        }
        
    })
}
//return function as exports to call in our index page
module.exports = {
    getFavLinks
}