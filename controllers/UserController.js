const db = require('../models');

const User = db.users;
const addUser = async (req, res) => {
  let info = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    contact: req.body.contact,
  };

  const user = await User.create(info).catch((err) => console.log(err));
  res.status(200).send(user);
};

module.exports = {
  addUser,
};
