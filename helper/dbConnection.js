const { default: mongoose } = require("mongoose")

// mongoose.connect('mongodb://localhost:27017/IGTask2')
//   .then(() => console.log('Connected Successfully!!!')).catch((err)=>{console.log(err.message)})

mongoose.connect('mongodb+srv://lokendrasinghr40:12344321@cluster0.rnsbvy8.mongodb.net/TaskManager')
  .then(() => console.log('Connected Successfully!!!')).catch((err)=>{console.log(err.message)})





