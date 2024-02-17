const express = require('express');
const router = express.Router();

const { sendMessage, getMessages } = require('../controllers/messagecontrollers');
const protectRoute = require('../middleware/protectedRoute');

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)


module.exports = router