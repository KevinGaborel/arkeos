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
            
            //Récupération des commentaires et des photos en plus de l'article
           const result = await client.query(`SELECT article_without_breeder.*,
           ARRAY_AGG(DISTINCT "comment"."content") as "comment",
           ARRAY_AGG(DISTINCT "comment"."author_id") as "author",
           ARRAY_AGG(DISTINCT "photo"."url_picture") as "photo"
           FROM "article_without_breeder" 
           FULL JOIN "comment" ON "comment"."article_id" = "article_without_breeder"."id"
           FULL JOIN "photo" ON "photo"."article_id" = "article_without_breeder"."id"
           WHERE "article_without_breeder"."id"=$1
           GROUP BY "article_without_breeder"."id", "article_without_breeder"."title", "article_without_breeder"."content", 
           "article_without_breeder"."url_picture", "article_without_breeder"."created_at", "article_without_breeder"."updated_at",
           "article_without_breeder"."author", "article_without_breeder"."author_id", "article_without_breeder"."author_picture",
           "article_without_breeder"."theme_name", "article_without_breeder"."theme_color", "article_without_breeder"."category_name",
           "article_without_breeder"."rating"
           `, [id]);

            return result.rows[0];
        } catch (error) {
            console.trace(error);
        }
    }

};

module.exports = ArticleViewModel;