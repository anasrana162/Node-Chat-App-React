const express = require('express');

const { getUsersForSidebar } = require('../controllers/usercontrollers');
const protectRoute = require('../middleware/protectedRoute');
protectRoute
const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)




module.exports = router