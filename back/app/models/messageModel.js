const CoreModel = require('./coreModel');
const client = require("../client");

class MessageModel extends CoreModel {

    static tableName = 'message';
    static fields = [
        'content',
        'discussion_id',
        'receiver_id',
        'sender_id'
    ];

    constructor(obj){
        super(obj);
    }

    static async addConversation(obj) {
        const result = await client.query(`INSERT INTO ${this.tableName} ("content", "discussion_id", "receiver_id", "sender_id") VALUES 
        ($1, $2, $3, $4) RETURNING *`, 
        [obj.content, obj.discussion_id, obj.receiver, obj.sender]);
    
        if (!result.rows[0]) {
            return null;
        }
        return result.rows[0];
      };


    static async addDiscussion(id) {
        const result = await client.query(`INSERT INTO "discussion" ("created_by") VALUES 
        ($1) RETURNING *`, 
        [id],);
    
        if (!result.rows[0]) {
            return null;
        }
        return result.rows[0];
    };

    static async deleteDiscussion(data) {
        const discussion = await client.query(`SELECT * FROM "discussion" WHERE "id"=$1`, 
        [data.id_discussion],);

        if (discussion.rows[0].delete_by !== null && discussion.rows[0].delete_by != data.id_user){
            await client.query(`DELETE FROM "discussion" WHERE "id"=$1`, [data.id_discussion]);
            await client.query(`DELETE FROM "message" WHERE "discussion_id"=$1`, [data.id_discussion]);
            return "Deleted";
        }
    
        const result = await client.query(`UPDATE "discussion" SET "delete_by"=$1 WHERE id=$2 RETURNING *`, 
        [data.id_user, data.id_discussion],);
        
        if (!result.rows[0]) {
            return null;
        }
        return result.rows[0];
    };

    static async updateDiscussion(id) {
        try {
            const result = await client.query(`UPDATE "discussion" SET "delete_by"='null' WHERE id=$1 RETURNING *`, 
            [id]);
            if (result.rows[0]) {
                return result;
            } else {
                return "Erreur sur la discussion!"
            }
        } catch (error) {
            console.trace(error);
        }
    }
    
}

module.exports = MessageModel;