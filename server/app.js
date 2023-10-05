const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const url="mongodb+srv://yatishmanne09:yatish180104@crud1.za9cgjx.mongodb.net/" //New version of MongoDB not accepting local host un pace of URL
const app=express();

mongoose.connect(url)
const con = mongoose.connection
con.on('open', () =>
{
console.log('Connected to MongodbDB ')
})
app.use(cors())
app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})