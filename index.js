const express =require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


//import routes
const authRoute = require('./routes/auth')
const postRoute =require('./routes/post')

dotenv.config();

//connect to db
mongoose.connect(process.env.MONGO_URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    ignoreUndefined:true,
    useUnifiedTopology:true
},()=>console.log('Connected to db'))


//middleware
app.use(express.json());

//route middleware
app.use('/api/user',authRoute);
app.use('/api/post',postRoute);

app.listen(3000,()=>console.log('Server is running'))