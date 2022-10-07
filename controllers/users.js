const User = require("../models/users")
const { v4: uuidv4} = require('uuid')

// get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send("users are here")
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}


// create users
const addUser = async (req, res) => {
    console.log(req.body)
    const user = req.body;
  console.log(req.body);
  try {
const newUser = await User.create(user);
   await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log(error, "error");
  }
}

// getting. user by id
const getUser = async (req, res) => {
    try {
    const User = await User.findOne({id: req.params.id})
     if(User.length > 0) {
        res.status(200).send(User)
     } else {
        res.status(404).send({message: "User is not found with this id"})
     }
    } catch (error) {
     res.status(500).send({
         message: error.message})
    }
 }

 // update / put User by id
 const updateUser = async (req, res) => {
    let id = req.params.id
     try {        
         const user = await User.findOne({id: req.params.id})
         if(user) {
            await User.updateOne(
             {
             id},
 
             {
                $set: {
                   name: req.body.name,
                   age: req.body.age
               }
               
             })
            res.status(200).send({
                message : "User is updated"
            })
 
 
         } else {
            res.status(404).send({message: "user is not found with this id"})
         }
     } catch (error) {
      res.status(500).send({
         message: error.message})
     }
  }

  // delete user by id
const deleteUser = async (req, res) => {
    try {
    const user = await User.findOne({id: req.params.id})
     if(user) {
        User.deleteOne({id: req.params.id})
        res.status(200).send({
            message : "User is deleted"
        })
     } else {
        res.status(404).send({message: "user is not found with this id"})
     }
    } catch (error) {
     res.status(500).send({
         message: error.message})
    }
 }

module.exports = { getUsers, addUser, getUser, updateUser, deleteUser }