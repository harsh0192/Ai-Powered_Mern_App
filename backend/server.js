  require('dotenv').config() 
 const app = require('./src/app')


 app.listen(3000,()=>{
   console.log(`Server got started at PORT : 3000`);
   
 })