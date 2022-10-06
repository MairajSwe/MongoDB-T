const Product = require("./model/products")
const { v4: uuidv4 } = require('uuid');

const getProducts = async (req, res) => {
   try {
    const products = await Product.find()
    res.status(200).send("products are here")
   } catch (error) {
    res.status(500).send({
        message: error.message})
   }
}

// getting.
const getProduct = async (req, res) => {
    try {
    const Product = await Product.findOne({id: req.params.id})
     if(product.length > 0) {
        res.status(200).send(Product)
     } else {
        res.status(404).send({message: "product is not found with this id"})
     }
    } catch (error) {
     res.status(500).send({
         message: error.message})
    }
 }

const deleteProduct = async (req, res) => {
    try {
    const product = await Product.findOne({id: req.params.id})
     if(product) {
        Product.deleteOne({id: req.params.id})
        res.status(200).send({
            message : "Product is deleted"
        })
     } else {
        res.status(404).send({message: "product is not found with this id"})
     }
    } catch (error) {
     res.status(500).send({
         message: error.message})
    }
 }


const addProduct = async (req, res) => {
    try {
        const product = await Product.findOne({id: req.params.id})
     if(product) {
        await Product.updateOne({id: req.params.id})
        res.status(200).send({
            message : "Product is added"
        })
     } else {
        res.status(404).send({message: "product is not found with this id"})
     }
    
    } catch (error) {
     res.status(500).send({
        message: error.message})
    }
 }

 const updateProduct = async (req, res) => {
   let id = req.params.id
    try {        
        const product = await Product.findOne({id: req.params.id})
        if(product) {
           await Product.updateOne({
            id},

            {
               $set: {
                  title: req.body.title,
                  price: req.body.price
              }
            })
           res.status(200).send({
               message : "Product is updated"
           })


        } else {
           res.status(404).send({message: "product is not found with this id"})
        }
    } catch (error) {
     res.status(500).send({
        message: error.message})
    }
 }


module.exports = {getProducts, addProduct, getProduct, deleteProduct, updateProduct}