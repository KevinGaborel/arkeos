const CoreModel = require('./coreModel');
const client = require('../client');

class MarketplaceModel extends CoreModel {

    static tableName = 'marketplace';
    static fields = [
        'scientific_name',
        'locality',
        'phase',
        'born_captivity',
        'price',
        'native_country',
        'birth_date',
        'content',
        'author_id',
        'category_id'
    ];

    constructor(obj){
        super(obj);
    }

    static async addMarket(data) {
        try {
            
            const result = await client.query(`INSERT INTO "${this.tableName}" 
            ("scientific_name", "locality", "phase", "born_captivity", "price", "native_country", "birth_date", "content", "author_id", "category_id") 
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, 
            [data.scientific_name, data.locality, data.phase, data.born_captivity, data.price, 
                data.native_country, data.birth_date, data.content, data.author_id, data.category_id]);
            if (result.rows[0]){
                return "L'article a bien été crée !";
            } else {
                return "Erreur, l'article n'a pas pu être crée :/";
            }
        } catch (error) {
            console.trace(error);
        }
    }
    
    static async updateMarket(data) {
        try {
            const result = await client.query(`UPDATE "${this.tableName}" SET
             "scientific_name"=$1, "locality"=$2, "phase"=$3, "born_captivity"=$4, "price"=$5, "native_country"=$6,
             "birth_date"=$7, "content"=$8
             WHERE id=$9 RETURNING *`, 
             [data.scientific_name, data.locality, data.phase, data.born_captivity, data.price, 
                data.native_country, data.birth_date, data.content, data.id]);
            console.log(result.rows);
            if (result.rows[0]) {
                return "L'article a bien été modifier !";
            } else {
                return "Erreur, cet article n'a pas pu être modifier !"
            }
        } catch (error) {
            console.trace(error);
        }
    }
}

module.exports = MarketplaceModel;