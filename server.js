require('dotenv').config()
const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');


const PORT=process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.json());

//cors setup
const corsOptions={
    origin:process.env.ALLOWED_CLIENTS.split(',')
}
app.use(cors(corsOptions))

const connectDB= require('./config/db');
 connectDB();


 app.set('views',path.join(__dirname,'/views'))
 app.set('view engine','ejs');

//Routes initialize
app.use('/api/files',require('./routes/files'))
app.use('/files',require('./routes/fileshow'))
app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})