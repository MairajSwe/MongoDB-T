const Express = require ("express");
const mongoose = require ("mongoose");


// use middleware to get body data.


const userRouter = require ("./routes/users");

const uri = "mongodb+srv://mairaj:mairaj@cluster1.tueneea.mongodb.net/?retryWrites=true&w=majority";
 
  mongoose.connect(
    uri,
    (e) => {
      try {
        if (e) {
          throw e;
        }
        console.log("database connected");
        app.listen(
          8005, () => {
            console.log(
              " running on port"
            )
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  );
 

const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))


// routes here
app.use("/users", userRouter);
// app.use("/products", productRouter);












