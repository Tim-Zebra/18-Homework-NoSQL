const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
// Get all users, create user
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
// Get single user by id, update user by id, and delete user by id.
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// Create and delete friends

module.exports = router;