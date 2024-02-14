// userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('./userController');
const { authorize } = require('./authMiddleware');

// Routes
router.post('/', userController.createUser);
router.get('/:userId', userController.getUser);
router.put('/:userId', authorize(['admin']), userController.updateUser);
router.delete('/:userId', authorize(['admin']), userController.deleteUser);

module.exports = router;
