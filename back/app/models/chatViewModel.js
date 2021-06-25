const CoreModel = require("./coreModel");
const client = require("../client");

class ChatViewModel extends CoreModel {

  static tableName = "chat_view";
  static fields = [
    "id",
    "content",
    "created_at",
    "receiver_id",
    "sender_id",
    "author"
  ];
  constructor(obj) {
    super(obj);
  }

  static async showConversation(id) {
    const result = await client.query(`SELECT * FROM ${this.tableName} 
    WHERE receiver_id = $1 AND sender_id = $2 
    OR sender_id = $3 AND receiver_id = $4`, 
    [id.receiver, id.sender, id.receiver, id.sender]);

    if (!result.rows[0]) {
        return null;
    }
    return result.rows;
  };

  static async showDiscussions(id) {
    const result = await client.query(`SELECT DISTINCT "chat_view"."receiver_id", "chat_view"."sender_id"
    FROM ${this.tableName}
    WHERE receiver_id = $1 OR sender_id = $2 `, 
    [id, id]);

    if (!result.rows[0]) {
        return null;
    }
    return result.rows;
  };

  
}
module.exports = ChatViewModel;
