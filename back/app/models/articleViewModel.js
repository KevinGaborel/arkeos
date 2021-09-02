const client = require('../client');
const CoreModel = require('./coreModel');

class ArticleViewModel extends CoreModel {

    static tableName = 'article_without_breeder';
    static fields = [
        'author_id',
        'title',
        'content',
        'author',
        'url_picture',
        'theme_name',
        'theme_color',
        'category_name'
    ];

    constructor(obj){
        super(obj);
    }

    static async showArticle(id) {
        try {
            const article = await client.query(`SELECT * FROM "article_without_breeder" WHERE "id"=$1`, [id]);

            const photoArticle = await client.query(`SELECT "photo"."location"
            FROM "photo"
            JOIN "article" ON "article"."id" = "photo"."article_id"
            WHERE "article_id" = $1`, [id]);

            const comment = await client.query(`SELECT "comment"."content", "comment"."created_at", 
                "user"."username" AS "author", "user"."profile_picture" AS "avatar"
                FROM "comment"
                JOIN "user" ON "user"."id" = "comment"."author_id"
                WHERE "article_id" = $1
                ORDER BY "created_at" ASC`, [id]);

            const result = [article.rows[0], comment.rows, photoArticle.rows];
            return result;
        } catch (error) {
            console.trace(error);
        }
    }

};

module.exports = ArticleViewModel;