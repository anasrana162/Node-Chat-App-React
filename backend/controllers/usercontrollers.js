const User = require("../models/usermodal");

const getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id
        
        // $ne stands for "not equal to"
        // find all the user in the database excep for the logged in one
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

        res.status(200).json(filteredUsers);

    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error in getUsersForSidebar controller", err.message);
    }
}

module.exports = { getUsersForSidebar }