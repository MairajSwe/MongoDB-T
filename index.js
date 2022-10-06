const express = require("express")
const connectDatabase = require("./config/db")

const productsRouter = require("./routes/products")



const app = express()

PORT = 8001

// use middleware to get body data.
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.listen(PORT, async () => {
    console.log(`Server is running http://localhost:${PORT}`)
    await connectDatabase()
})

app.get("/", (req, res) => {
    res.send("<h2>Welcome home</h2>")
})

app.use("/api/products", productsRouter)


// GET: /api/products --> return all products.

// GET: /api/products/:id --> return single product

// DELETE: /api/products/:id --> delete the product

// UPDATE: /api/products/:id --> update the product

//POST: /api/products/ --> create the product