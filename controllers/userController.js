const User = require('../models/userModel');

const addUser = async (req, res) => {
  const { name, lastName, age } = req.body;
  const user = new User({ name, lastName, age });
  const data = await user.save();
  console.log(data);
  res.send({ data });
};

const deleteUser = (req, res) => {
  // const { name, lastName, age } = req.body;
  // const user = new User({ name, lastName, age });
  // user.save();
};

module.exports = { addUser, deleteUser };
