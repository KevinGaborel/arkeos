const MessageModel = require('../models/messageModel');
const ChatViewModel = require('../models/chatViewModel');
const UserModel = require("../models/userModel");


exports.showMessages = async (request, response, next) => {
    try {
        const id = {};
        id.receiver = parseInt(request.params.receiver, 10);

        id.sender = request.user;

        //id.sender = 1;

        if (isNaN(id.receiver) || isNaN(id.sender)){
            return next();
        }

        const messages = await ChatViewModel.showConversation(id);

        if(!messages){
            return next();
        }


        response.json({messages});
       

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.addMessages = async (request, response, next) => {
    try {
        const data = {};
   
        data.receiver = parseInt(request.params.receiver, 10);
        
        data.sender = request.user;
        
        //data.sender = 1;
        
        data.content = request.body.content;

        if (isNaN(data.receiver) || isNaN(data.sender)){
            return next();
        }


        const searchIfMessages = await ChatViewModel.showConversation(data);

        let messages;
        if (searchIfMessages){
            data.discussion_id = searchIfMessages[0].discussion_id;
            const discussionReturn = await MessageModel.updateDiscussion(data.discussion_id);
            console.log(discussionReturn);
            messages = await MessageModel.addConversation(data);
        } else {
            const discussion = await MessageModel.addDiscussion(data.sender);
            data.discussion_id = discussion.id;
            messages = await MessageModel.addConversation(data);
        }

        response.json({messages});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.showDiscussion = async (request, response, next) => {
    try {
        const data = {};
        data.id = parseInt(request.user, 10);
        data.idStr = `${request.user}`;

        const discussions = await ChatViewModel.showDiscussions(data);

        if(!discussions){
            return next();
        }

        const result = [];


        for (const discussion of discussions){
            if ((discussion.receiver_id !== data.id && discussion.delete_by !== data.idStr) || (result.find(value => value !== discussion.receiver_id) && discussion.delete_by !== data.idStr)){
                const user = await UserModel.findById(discussion.receiver_id);
                user.discussion_id = discussion.discussion_id;
                result.push(user);
            } else if ((discussion.sender_id !== data.id && discussion.delete_by !== data.idStr) || (result.find(value => value !== discussion.sender_id) && discussion.delete_by !== data.idStr)) {
                const user = await UserModel.findById(discussion.sender_id);
                result.push(user);
            }
        } 


        //console.log(result);

        response.json(result);
       

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.deleteDiscussion = async (request, response, next) => {
    try {
        const data = {};
        data.id_user = request.user;
        console.log(data.id_user);
        data.id_discussion = parseInt(request.params.discussion, 10);

        const discussion = await MessageModel.deleteDiscussion(data);

        console.log(discussion);

        response.json(discussion);
       

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};