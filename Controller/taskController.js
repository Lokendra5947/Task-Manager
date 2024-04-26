const path  = require("path")

const { taskModel } = require("../Models/taskModel");

// create Task
const taskCreate = async(req,res)=>{
  let filelocation = path.join(__dirname,`../${req.file.destination+req.file.filename}`)

    try{
      const task = await taskModel.create({...req.body, Picture: filelocation})
      if (req.userid != task.userid) {
        return res.status(400).send({ success: true, message: "Not Authorized" });
      }
      res.status(201).send({success:true,message:"Task Created", data:task})}

  catch (error){
    console.log("error Occured",error)
    res.status(500).send({success:false,message:"Internal Sever error"})
  }}

  //  Get All Task

  const allTask = async (req, res) => {
    try {
      const tasks = await taskModel.find();
      return res.status(200).send({success:true,task:tasks});
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }


  // Get single task
  const singleTask = async(req,res)=>{
    const task = await taskModel.findById(req.params.id)
    if(!task) {return res.status(404).send({success:false,message:"no task found"})}
    res.status(200).send({success:true,message:"JOb Found",data:task})
  }

  // update task
const updateTask = async(req,res)=>{
  let filelocation = path.join(__dirname,`../${req.file.destination+req.file.filename}`)
  const {title,description,status,Picture} = req.body
  const task = await taskModel.findById(req.params.id)
  if(!task){return res.status(404).send({success:false,message:"task not Exsist"})}
  let updation = await taskModel.updateOne({_id:req.params.id},{title:title,description:description,status:status,Picture:filelocation})
  if (req.userid != task.userid) {
    return res.status(400).send({ success: true, message: "Not Authorized" });
  }
  res.status(200).send({success:true,message:"Updated Successfully", task:updation})
}
// Delete task

const deleteTask = async (req,res)=>{
  const task = await taskModel.findById(req.params.id)
  if(!task){return res.status(404).send({success:false,message:"task not Exsist"})}
  const deletee = await taskModel.findByIdAndDelete(req.params.id)
  if (req.userid != task.userid) {
    return res.status(400).send({ success: true, message: "Not Authorized" });
  }
  res.status(200).send({success:true,message:"Job Deleted",data:task})
}

  module.exports = {taskCreate, allTask, singleTask,updateTask,deleteTask}