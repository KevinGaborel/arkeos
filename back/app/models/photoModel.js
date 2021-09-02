const CoreModel = require('./coreModel');
const client = require("../client");

class PhotoModel extends CoreModel {

    static tableName = 'photo';
    static fields = [
        'location',
        'url_picture',
        'article_id',
        'marketplace_id',
        'response_id',
        'question_id',
        'author_id'
    ];

    constructor(obj){
        super(obj);
    }

    static async showImage(fileName) {
        try {
          const result = await client.query(
            `SELECT "id", "location", "url_picture", "author_id" FROM "${this.tableName}" 
                WHERE "location" = $1`,
            [fileName]
          );
    
          if (result.rows[0]) {
            return result.rows[0];
          } else {
            return "Erreur, pathName invalid";
          }
        } catch (error) {
          console.trace(error);
        }
      }

      static async addImage(data) {
        try {
            const result = await client.query(`INSERT INTO "${this.tableName}" ("location", "url_picture", "author_id") VALUES 
            ($1, $2, $3) RETURNING "location", "url_picture", "author_id"`, [data.filename, data.path, data.author_id]);
            if (result.rows[0]){
                return result.rows[0];
            } else {
                return "Erreur, l'image n'a pas pu être upload :/";
            }
        } catch (error) {
            console.trace(error);
        }
    }

}

module.exports = PhotoModel;