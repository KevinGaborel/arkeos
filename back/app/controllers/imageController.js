const PhotoModel = require('../models/photoModel');
const path = require('path');


exports.showImage = async (request, response, next) => {
    try {
        const { filename } = request.params;

        console.log("c'est le filename", filename);

        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, 'app/img/' + filename);

        console.log("c'est le full path", fullfilepath);

        return response.sendFile(fullfilepath);


        //const photo = await PhotoModel.showImage(filename);

        //console.log(photo);

        //response.json('/image/:filename');
       

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.addImage = async (request, response, next) => {
    try {
        const image = request.file;

        console.log(image);
        const data = {};
        //data.author_id = request.user;
        data.author_id = 1;
        data.filename = image.filename;
        data.path = image.path;

        const photo = await PhotoModel.addImage(data);
        console.log("c'est la photo", photo);

        if(!photo){
            return next();
        }

        response.json(photo);

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

/*
exports.showDiscussion = async (request, response, next) => {
    try {
        const id = request.user;

        if (isNaN(id)){
            return next();
        }

        const discussions = await ChatViewModel.showDiscussions(id);
        console.log(discussions);

        if(!discussions){
            return next();
        }

        const result = [];

        for (const discussion of discussions){
            if (discussion.receiver_id !== id || result.find(value => value !== discussion.receiver_id)){
                const user = await UserModel.findById(discussion.receiver_id);
                result.push(user);
            } else if (discussion.sender_id !== id || result.find(value => value !== discussion.sender_id)) {
                const user = await UserModel.findById(discussion.sender_id);
                result.push(user);
            }
        } 


        console.log(result);

        response.json(result);
       

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

*/