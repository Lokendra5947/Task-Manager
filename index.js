const express = require("express")

const { userRoutes } = require("./Routes/userRoutes")
const taskRouter = require("./Routes/taskRoutes")


let app = express()
PORT = 6000
require("./helper/dbConnection")
app.use(express.json())
app.use('/user',userRoutes)
app.use("/task", taskRouter)


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})