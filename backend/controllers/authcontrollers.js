const User = require('../models/usermodal')
const bcrypt = require("bcryptjs")
const generateTokenAndSetCookie = require('../utils/generatetoken')

const Login = async (req, res) => {
    try {

        const { username, password } = req.body

        const user = await User.findOne({ username });

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);
        // console.log("token:", generateTokenAndSetCookie(user._id, res));

        res.status(200).json({
            user_data: {
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic,
            },
            message: "Login Successful!"
        })



    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
        console.log("Error in login controller", err.message);
    }
}

const Signup = async (req, res) => {
    // res.send("Signup Route");

    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" })
        }
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        // HASH PASSWORD HERE

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlsProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlsProfilePic
        })

        if (newUser) {
            // generate JWT token here;

            await generateTokenAndSetCookie(newUser._id, res)

            await newUser.save();

            res.status(200).json({
                user_data: {
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    profilePic: newUser.profilePic,
                },
                message: "Signup Successful!"
            })
        } else {
            console.log("Something wrong with user Data in signup");
            return res.status(400).json({ error: "Invalid user Data" })
        }


    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
        console.log("Error in signup controller", err.message);
    }
}

const Logout =  (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({
            message: "Logged Out Successfully!"
        })

    } catch (err) {

        res.status(500).json({ error: "Internal Server Error" })
        console.log("Error in login controller", err.message);
    }
}

module.exports = { Login, Signup, Logout }