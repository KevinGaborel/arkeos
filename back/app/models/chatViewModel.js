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
    const result = await client.query(`SELECT "chat_view"."id", "chat_view"."content", 
    "chat_view"."discussion_id", "chat_view"."receiver_id", "chat_view"."sender_id", "chat_view"."author",
    TO_CHAR("chat_view"."created_at", 'DD-MM-YYYY HH24:MI') "created_at", "user"."profile_picture" AS "profile_picture"
    FROM ${this.tableName} 
    JOIN "user" ON "user"."id" = "chat_view"."sender_id"
    WHERE receiver_id = $1 AND sender_id = $2 
    OR sender_id = $3 AND receiver_id = $4`, 
    [id.receiver, id.sender, id.receiver, id.sender]);
    if (!result.rows[0]) {
      return null;
    }
    return result.rows;
  };
  
  static async showDiscussions(obj) {
    const result = await client.query(`SELECT DISTINCT "chat_view"."receiver_id", "chat_view"."sender_id", 
    "chat_view"."discussion_id", "discussion"."delete_by"
    FROM ${this.tableName}
    FULL JOIN "discussion" ON "discussion"."id" = "chat_view"."discussion_id"
    WHERE "discussion"."delete_by" != $2 AND receiver_id = $1
    OR sender_id = $1`, 
    [obj.id, obj.idStr]);
    
    if (!result.rows[0]) {
        return null;
    }

    return result.rows;
  };

  
}
module.exports = ChatViewModel;

