const express = require('express');
const app = express();
const path = require('path');

// uncomment the below for proxy challenge



app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(3000); //listens on port 3000 -> http://localhost:3000/
