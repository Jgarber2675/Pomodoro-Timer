const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://jgarber2675:codesmith@cluster0.ul3hh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'userModel'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const userSchema = new Schema({
  username: String,
  password: String,
  pomodoroTime: Number,
  shortBreak: Number,
  longBreak: Number
});

// creats a model for the 'user' collection that will be part of the export
const UserModel = mongoose.model('species', userSchema);



// exports all the models in an object to be used in the controller
module.exports = UserModel;