const express = require ("express")
const { getProducts, addProduct, getProduct, deleteProduct, updateProduct } = require("../controllers/products")
const router = express.Router()

// routes.
router.get("/", getProducts)

router.get("/:id", getProduct)

router.post("/", addProduct)

router.delete("/:id", deleteProduct)

router.put("/:id", updateProduct)

 module.exports= router