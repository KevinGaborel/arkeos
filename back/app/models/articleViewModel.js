const client = require('../client');
const CoreModel = require('./coreModel');

class ArticleViewModel extends CoreModel {

    static tableName = 'view_article';
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
           const result = await client.query(`SELECT view_article.*,
           ARRAY_AGG("comment"."content") as "comment",
           ARRAY_AGG("comment"."author_id") as "author_id_comment",
           ARRAY_AGG(TO_CHAR("comment"."created_at", 'DD-MM-YYYY HH24:MI')) as "comment_created_at",
           ARRAY_AGG("user_view"."username") as "author_comment",
           ARRAY_AGG("user_view"."profile_picture") as "author_picture_comment",
           ARRAY_AGG("photo"."url_picture") as "photo"
           FROM "view_article" 
           FULL JOIN "comment" ON "comment"."article_id" = "view_article"."id"
           FULL JOIN "photo" ON "photo"."article_id" = "view_article"."id"
           FULL JOIN "user_view" ON "user_view"."id" = "comment"."author_id"
           WHERE "view_article"."id"=$1
           GROUP BY "view_article"."id", "view_article"."title", "view_article"."content", 
           "view_article"."url_picture", "view_article"."created_at", "view_article"."updated_at",
           "view_article"."author", "view_article"."author_id", "view_article"."author_picture",
           "view_article"."theme_name", "view_article"."theme_color", "view_article"."category_name",
           "view_article"."rating"
           `, [id]);

            return result.rows[0];
        } catch (error) {
            console.trace(error);
        }
    }

};

module.exports = ArticleViewModel;