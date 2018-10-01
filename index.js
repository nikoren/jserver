
const express = require('express');
const app = express();

app.get( '/', (req,res) => { 
    res.send({hi: 'there'});
});

console.log('Server running at http://127.0.0.1:4000/');
app.listen(4000, '127.0.0.1')