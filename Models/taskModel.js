const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'pending' },
  Picture:{type:String,default:""},
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel', required: true },

});
const taskModel =  mongoose.model('taskModel', taskSchema);
module.exports ={taskModel}
