const db = require('../models/usermodels');

const userController = {};

userController.getUser = async (req, res, next) => {
  const {username,password} = req.query;
  const user = await db.findOne({
    username: username,
    password: password
  });

  res.locals.user = user;
  return next();  
};

userController.createUser = async (req, res, next) => {
  console.log(req.body);
  const {username, password, pomodoroTime, shortBreak, longBreak} = req.body;
  console.log(username,password)
  const newUser = await db.create({
    username: username,
    password: password,
    pomodoroTime: pomodoroTime,
    shortBreak: shortBreak,
    longBreak: longBreak
  });

  res.locals.newUser =  newUser;
  return next();
};

module.exports = userController;