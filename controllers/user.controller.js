const db = require('../models');
const User = db.users;

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: 'User not found' });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const [updated] = await User.update(req.body, { where: { id } });
  if (updated) {
    const updatedUser = await User.findByPk(id);
    res.json(updatedUser);
  } else res.status(404).json({ error: 'User not found' });
};

exports.patchUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  Object.assign(user, req.body);
  await user.save();
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const deleted = await User.destroy({ where: { id: req.params.id } });
  if (deleted) res.json({ message: 'User deleted' });
  else res.status(404).json({ error: 'User not found' });
};
