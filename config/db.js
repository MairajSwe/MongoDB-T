const mongoose = require ("mongoose")
//connecting to database

const connectDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/productsDB")
        console.log("database is connected")
    } catch (error) {
        console.log(error)
        process.exit(1)     // 1 uses for true to stop and 0 is use for false not stop ..
    }
}

module.exports = connectDatabase