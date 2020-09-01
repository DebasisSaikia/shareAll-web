require('dotenv').config();

const mongoose=require('mongoose');

 function connectDB(){
    //db connection
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useCreateIndex:true,
        useUnifiedTopology:true,useFindAndModify:true})
        const connection=mongoose.connection;

        connection.once('open',()=>{
            console.log('App successfully connected to MongoDb database');
        }).catch(err=>{
            console.log('Database connection Failed!!')
        })
}
module.exports=connectDB;


// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDb database connection established successfully");
// });
