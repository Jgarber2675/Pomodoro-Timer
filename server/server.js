const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/api');
const bodyParser = require('body-parser')

app.use(bodyParser.json());



app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

app.use('/user', userRouter);

//default error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
  


app.listen(3000); //listens on port 3000 -> http://localhost:3000/
