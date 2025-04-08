const express =require('express');
const mongoose = require('mongoose');
const app=express();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/testingdb';

mongoose.connect(mongoUrl).then(()=>{console.log('✅ MongoDB Connected')}).catch((err)=>{console.log(err)});


app.get('/',(req,res)=>{
    res.send('Node.js App with MongoDB!');

});


const PORT=process.env.PORT || 3000;

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
