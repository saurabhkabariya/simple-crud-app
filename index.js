const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const productRoute=require('./routes/product.route.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

app.use("/api/products",productRoute)
app.get('/',(req,res)=>{
    res.send("Hello from node API")
})

mongoose.connect("mongodb+srv://kabariyasaurabh:qmD7gxCHidM39lvN@crud-api.joswk.mongodb.net/?retryWrites=true&w=majority&appName=Crud-API").then(()=>{console.log('Connected to DB');
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })
}).catch(()=>{console.log('Connection Failed');
})