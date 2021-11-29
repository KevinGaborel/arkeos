const CoreModel = require('./coreModel');
const client = require('../client');

class CommentModel extends CoreModel {

    static tableName = 'comment';
    static fields = [
        'content',
        'author_id',
        'article_id',
        'created_at',
        'updated_at'
    ];

    constructor(obj){
        super(obj);
    };

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
    };

    static async getComment(idArticle) {
        try {
            
            //Récupération des commentaires et des photos en plus de l'article
           const result = await client.query(`SELECT
           ARRAY_AGG("comment"."id") as "id",
           ARRAY_AGG("comment"."content") as "comment",
           ARRAY_AGG("comment"."author_id") as "author_id",
           ARRAY_AGG(TO_CHAR("comment"."created_at", 'DD-MM-YYYY HH24:MI')) as "created_at",
           ARRAY_AGG("user_view"."username") as "author_comment",
           ARRAY_AGG("user_view"."profile_picture") as "author_picture",
           ARRAY_AGG("photo"."url_picture") as "photo"
           FROM "comment" 
           FULL JOIN "article" ON "article"."id" = "comment"."article_id"
           FULL JOIN "photo" ON "photo"."article_id" = "article"."id"
           FULL JOIN "user_view" ON "user_view"."id" = "comment"."author_id"
           WHERE "article"."id"=$1 
           GROUP BY "comment"."id"
           ORDER BY "comment"."created_at" DESC
           `, [idArticle]);

            return result.rows;
        } catch (error) {
            console.trace(error);
        }
    };

};

module.exports = CommentModel;