const app = require("./app");

const dotenv = require("dotenv");

//config dot env path
dotenv.config({path:"./config/config.env"})

app.listen(process.env.PORT, ()=>{

    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})