const CoreModel = require('./coreModel');
const client = require('../client');

class CommentModel extends CoreModel {

    static tableName = 'comment';
    static fields = [
        'content',
        'author_id',
        'article_id'
    ];

    constructor(obj){
        super(obj);
    }

    static async addComment(obj) {
        try {
            const result = await client.query(`INSERT INTO "${this.tableName}" ("content", "author_id", "article_id") VALUES
            ($1, $2, $3) RETURNING *`, [obj.content, obj.author_id, obj.article_id]);

            console.log(result.rows[0]);
            if (result.rows[0]) {
                return "Add perform !";
            } else {
                return "Error, could not be added";
            }
        } catch (error) {
            console.trace(error);
        }
    }

}

module.exports = CommentModel;