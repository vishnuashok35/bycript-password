const express = require('express');
const app = express();
const routerApp = require('./routes/route.js')


app.use(express.json());




//Router //
app.use('/api',routerApp)


app.listen(process.env.PORT || 5000, ()=>{
    console.log('running');
});

