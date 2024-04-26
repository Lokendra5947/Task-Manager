const express = require('express');
const taskRouter = express.Router();
const { verifyToken } = require('../middleware/jwtVerify');
const { taskCreate, allTask, singleTask, updateTask, deleteTask } = require('../Controller/taskController');
const { upload } = require('../helper/multer');
// const { upload } = require('../helper/multer');

// // Routes for task management
taskRouter.get('/' ,allTask);
taskRouter.post('/createTask',verifyToken,upload.single("picture") ,taskCreate);
taskRouter.get('/:id', verifyToken, singleTask);
taskRouter.put('/update/:id', verifyToken,upload.single("picture"), updateTask);
taskRouter.delete("/:id",verifyToken,deleteTask)

module.exports = taskRouter;
