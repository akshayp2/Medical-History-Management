const express = require('express');
const app = express();
const PORT = 9000;
app.get('/',(req,res)=>res.send('Hello world'));

app.listen(PORT,()=>console.log(`server is running at ${PORT}`));


