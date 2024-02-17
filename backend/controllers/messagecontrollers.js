const Conversation = require("../models/consversationmodel");
const Message = require("../models/messagemodel");

const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO Functionality will go here

        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel (will run together)
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage)

    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
        console.log("Error in sendMessage controller", err.message);
    }
}

const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        console.log("senderId", senderId);
        console.log("userToChatId", userToChatId);
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");
        console.log("conversation.messages", conversation);

        if (!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error in getMessage controller", err.message);
    }
}

module.exports = { sendMessage, getMessages }