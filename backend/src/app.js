 const express= require('express')
 const app = express();
 const aiRoutes= require('../src/routes/ai.routes')
 const cors= require('cors')

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
   res.send("hello world")
})

app.use('/ai',aiRoutes)

 module.exports= app;
